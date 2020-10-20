import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
  State,
  Watch
} from '@stencil/core';

import { buildI18nForComponent, GetI18nValue } from '../../../i18n';
import contextSearchResources from './i18n/en.json';
import onDisabledChange from './utils/on-disabled-change/on-disabled-change';

/**
 * @slot  - Required slot for input tag
 */

@Component({
  styleUrl: 'gux-context-search-beta.less',
  tag: 'gux-context-search-beta'
})
export class GuxContextSearchBeta {
  private inputSlottedElement: HTMLInputElement;
  private navigateCountPanel: HTMLSpanElement;

  @Element()
  private root: HTMLGuxContextSearchBetaElement;

  /**
   * Disables the Next and Previous buttons.
   */
  @Prop()
  disableNavigation: boolean = false;

  /**
   * The Match Count
   */
  @Prop({ mutable: true })
  matchCount: number = 0;

  /**
   * The Current match count which needs to highlighted
   */
  @Prop({ mutable: true })
  currentMatch: number = 0;

  @State()
  private disabled: boolean;

  @State()
  private value: string;

  /**
   * Triggered when user clicks navigate buttons.
   * @return The Current match value
   */
  @Event()
  navigate: EventEmitter<number>;

  private i18n: GetI18nValue;

  @Watch('currentMatch')
  watchCurrentMatch() {
    this.setPaddingForInput();
  }

  /**
   * Clears the input.
   */
  @Method()
  async clear(): Promise<void> {
    if (this.disabled) {
      return;
    }
    this.value = '';
    this.matchCount = 0;
    this.currentMatch = 0;
    this.inputSlottedElement.value = '';
    this.emitNavigate();
  }

  async componentWillLoad() {
    this.i18n = await buildI18nForComponent(this.root, contextSearchResources);
    this.inputSlottedElement = this.root.querySelector('input');
    this.disabled = this.inputSlottedElement.disabled;
    this.value = this.inputSlottedElement.value;
    onDisabledChange(this.inputSlottedElement, (disabled: boolean) => {
      this.disabled = disabled;
    });
    this.inputSlottedElement.addEventListener('input', e => this.onInput(e));
    this.setMatchCount();
    this.setCurrentMatch();
    this.setPaddingForInput();
  }

  componentDidLoad() {
    this.setPaddingForInput();
  }

  render() {
    const disableNavigationPanel = this.disableNavigationPanel();
    return (
      <div
        class={this.disabled ? 'gux-disabled' : ''}
        aria-label={this.i18n('title')}
      >
        <div class="gux-context">
          <slot />
          <div class="gux-search-icon">
            <gux-icon decorative iconName="ic-search"></gux-icon>
          </div>
          {this.showNavigationPanel() && (
            <div>
              <div
                class={
                  disableNavigationPanel
                    ? 'gux-navigation-disabled gux-navigation-panel'
                    : 'gux-navigation-panel'
                }
                title={this.matchCountResult()}
              >
                {this.showNavigationPanel() && (
                  <span
                    class="gux-navigation-result"
                    ref={el => (this.navigateCountPanel = el)}
                    aria-label={this.matchCountResult()}
                  >
                    {this.matchCountResult()}
                  </span>
                )}
                <button
                  type="button"
                  class="gux-previous-button"
                  title={this.i18n('navigatePreviousBtn')}
                  aria-label={this.i18n('navigatePreviousBtn')}
                  onClick={() => this.previousClick()}
                  disabled={disableNavigationPanel}
                >
                  <gux-icon decorative iconName="ic-arrow-solid-up"></gux-icon>
                </button>
                <button
                  type="button"
                  class="gux-next-button"
                  title={this.i18n('navigateNextBtn')}
                  aria-label={this.i18n('navigateNextBtn')}
                  onClick={() => this.nextClick()}
                  disabled={disableNavigationPanel}
                >
                  <gux-icon
                    decorative
                    iconName="ic-arrow-solid-down"
                  ></gux-icon>
                </button>
              </div>
              <button
                type="button"
                class="gux-clear-button"
                title={this.i18n('eraseBtnAria')}
                aria-label={this.i18n('eraseBtnAria')}
                onClick={() => this.clear()}
                disabled={this.disabled}
              >
                <gux-icon decorative iconName="ic-close"></gux-icon>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  private matchCountResult(): string {
    if (this.disableNavigation) {
      if (this.matchCount === 1) {
        return this.i18n('match', {
          matchCount: this.matchCount
        });
      } else {
        return this.i18n('matches', {
          matchCount: this.matchCount
        });
      }
    } else {
      return this.i18n('totalMatches', {
        currentMatch: this.currentMatch,
        matchCount: this.matchCount
      });
    }
  }
  private setPaddingForInput(): void {
    if (this.inputSlottedElement) {
      let paddingWidth = 83;
      if (this.navigateCountPanel && this.navigateCountPanel.clientWidth) {
        paddingWidth = 83 + Math.ceil(this.navigateCountPanel.clientWidth);
      }
      this.inputSlottedElement.setAttribute(
        'style',
        `padding-right: ${paddingWidth}px`
      );
    }
  }

  private showNavigationPanel(): boolean {
    return this.value !== '' ? true : false;
  }

  private disableNavigationPanel(): boolean {
    return this.disabled || this.disableNavigation || this.matchCount <= 0;
  }

  private setMatchCount(): void {
    this.matchCount =
      this.matchCount &&
      Number.isInteger(this.matchCount) &&
      this.matchCount > 0
        ? Number(this.matchCount)
        : 0;
  }

  private setCurrentMatch(): void {
    if (this.matchCount <= 0) {
      this.currentMatch = 0;
    } else if (this.matchCount > 0) {
      this.currentMatch =
        this.currentMatch &&
        Number.isInteger(this.currentMatch) &&
        this.currentMatch > 0 &&
        this.currentMatch <= this.matchCount
          ? Number(this.currentMatch)
          : 1;
    }
  }

  private resetCurrentMatch(): void {
    this.currentMatch = this.matchCount > 0 ? 1 : 0;
  }

  private nextClick(): void {
    if (this.disableNavigationPanel()) {
      return;
    }
    if (this.currentMatch === this.matchCount) {
      this.currentMatch = 1;
    } else {
      this.currentMatch++;
    }
    this.emitNavigate();
  }

  private previousClick(): void {
    if (this.disableNavigationPanel()) {
      return;
    }
    if (this.currentMatch === 1) {
      this.currentMatch = this.matchCount;
    } else {
      this.currentMatch--;
    }
    this.emitNavigate();
  }

  private onInput(event): void {
    if (this.disabled) {
      return;
    }
    this.value = event.target.value;
    this.setPaddingForInput();
    this.resetCurrentMatch();
  }

  private emitNavigate(): void {
    this.navigate.emit(this.currentMatch);
  }
}
