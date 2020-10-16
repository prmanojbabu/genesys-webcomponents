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

@Component({
  styleUrl: 'gux-context-search.less',
  tag: 'gux-context-search-beta'
})
export class GuxContextSearch {
  @Element()
  root: HTMLGuxContextSearchBetaElement;
  inputElement: HTMLInputElement;

  /**
   * Indicate the input value
   */
  @Prop({ mutable: true, reflectToAttr: true })
  value: string = '';

  /**
   * Disable the input and prevent interactions.
   */
  @Prop()
  disabled: boolean = false;

  /**
   * Disables the Next and Previous buttons.
   */
  @Prop()
  disableNavigationMode: boolean = false;

  /**
   * The input placeholder.
   */
  @Prop()
  placeholder: string;

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

  /**
   * The label for the erase button
   */
  @Prop()
  eraseLabel: string;

  /**
   * The label for the navigate panel
   */
  @Prop()
  navigationLabel: string;

  /**
   * The label for the navigate next button
   */
  @Prop()
  nextLabel: string;

  /**
   * The label for the navigate previous button
   */
  @Prop()
  previousLabel: string;

  /**
   * Aria label to use in case the text field
   * does not have an actual label.
   */
  @Prop()
  srLabel: string;

  @State()
  srLabelledby: string;

  @State()
  navigateCountPanel: HTMLSpanElement;

  /**
   * Triggered when user inputs.
   * @return The input value
   */
  @Event()
  input: EventEmitter<any>;

  /**
   * Triggered when user click navigate buttons.
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
  async clear() {
    if (this.disabled) {
      return;
    }
    this.value = '';
    this.matchCount = 0;
    this.currentMatch = 0;
    this.inputElement.value = '';
    this.inputElement.focus();
    this.input.emit(this.value);
    this.navigate.emit(this.currentMatch);
  }

  /**
   * Provides an aria-labelledby element for this component.
   * @param id The value for aria-labeledby.
   */
  @Method()
  async setLabelledBy(id: string) {
    this.srLabelledby = id;
  }

  /**
   * Sets the input focus to the text input.
   */
  @Method()
  async setInputFocus() {
    this.inputElement.focus();
  }

  async componentWillLoad() {
    this.i18n = await buildI18nForComponent(this.root, contextSearchResources);
  }

  componentDidLoad() {
    this.setMatchCount();
    this.setCurrentMatch();
    this.setPaddingForInput();
  }

  render() {
    return (
      <div
        class={this.disabled ? 'gux-disabled' : ''}
        aria-label={this.srLabel}
        aria-labelledby={this.srLabelledby}
      >
        <div class="gux-context">
          <input
            class="gux-text-clearable"
            value={this.value}
            ref={el => (this.inputElement = el)}
            aria-label={this.i18n('title')}
            disabled={this.disabled}
            placeholder={this.placeholder}
            onInput={e => this.emitInput(e)}
            onFocus={e => this.emitFocusEvent(e)}
            onBlur={e => this.emitFocusEvent(e)}
          />
          <div class="gux-search-icon">
            <gux-icon decorative iconName="ic-search"></gux-icon>
          </div>
          {this.showNavigationPanel() && (
            <div>
              <div
                class={
                  this.disableNavigationPanel()
                    ? 'gux-navigation-disabled gux-navigation-panel'
                    : 'gux-navigation-panel'
                }
                title={this.navigationLabel}
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
                  title={this.previousLabel}
                  aria-label={this.i18n('navigatePreviousBtn')}
                  onClick={() => this.previousClick()}
                  disabled={this.disableNavigationPanel()}
                >
                  <gux-icon decorative iconName="ic-arrow-solid-up"></gux-icon>
                </button>
                <button
                  type="button"
                  class="gux-next-button"
                  title={this.nextLabel}
                  aria-label={this.i18n('navigateNextBtn')}
                  onClick={() => this.nextClick()}
                  disabled={this.disableNavigationPanel()}
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
                title={this.eraseLabel}
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
    if (this.disableNavigationMode) {
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
  private setPaddingForInput() {
    if (this.inputElement && this.navigateCountPanel) {
      this.inputElement.setAttribute(
        'style',
        `padding-right: ${
          83 + Math.ceil(this.navigateCountPanel.clientWidth)
        }px`
      );
    }
  }

  private showNavigationPanel(): boolean {
    return this.value !== '' ? true : false;
  }

  private disableNavigationPanel(): boolean {
    return this.disabled || this.disableNavigationMode || this.matchCount <= 0;
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
    if (!this.disableNavigationPanel()) {
      if (this.currentMatch !== this.matchCount) {
        this.currentMatch++;
      } else {
        this.currentMatch = 1;
      }
      this.emitNavigate();
    }
  }

  private previousClick(): void {
    if (!this.disableNavigationPanel()) {
      if (this.currentMatch > 1) {
        this.currentMatch--;
      } else {
        this.currentMatch = this.matchCount;
      }
      this.emitNavigate();
    }
  }

  private emitInput(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.value = event.target.value;
    this.setPaddingForInput();
    this.resetCurrentMatch();
    this.input.emit(event.target.value);
  }

  private emitFocusEvent(event) {
    this.root.dispatchEvent(new FocusEvent(event.type, event));
  }

  private emitNavigate() {
    this.navigate.emit(this.currentMatch);
  }
}
