import { newSpecPage } from '@stencil/core/testing';
import { GuxContextSearch } from '../gux-context-search';

const components = [GuxContextSearch];
const language = 'en';

describe('gux-context-search', () => {
  describe('#render', () => {
    [
      {
        description: 'should render default control no props',
        html: '<gux-context-search></gux-context-search>'
      },
      {
        description: 'should render default control no props With placeholder',
        html: '<gux-context-search placeholder="Search"></gux-context-search>'
      },
      {
        description: 'should render default control with all props',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "10 Matches Found"
        current-match="1"
        match-count="10"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with no match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "0 Matches Found"
        current-match="0"
        match-count="0"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with long text no match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "0 Matches Found"
        current-match="0"
        match-count="0"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with long text 1 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Match Found"
        current-match="1"
        match-count="1"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with short text 100000 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000 Match Found"
        current-match="1000"
        match-count="100000"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with long text 100000 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000 Match Found"
        current-match="1000"
        match-count="100000"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with invalid  match count',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000 Match Found"
        current-match="100000"
        match-count="abc"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props with invalid current match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000 Match Found"
        current-match="100000"
        match-count="100"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "10 Matches Found"
        current-match="1"
        match-count="10"
        disabled ="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode with no match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled with no Match"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "0 Matches Found"
        current-match="0"
        match-count="0"
        disabled ="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode with 1 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled with 1 match"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Matches Found"
        current-match="1"
        match-count="1"
        disabled ="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode with 100000000 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled with big match"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000000 Matches Found"
        current-match="10000"
        match-count="100000000"
        disabled ="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode with long value',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Matches Found"
        current-match="1"
        match-count="1"
        disabled ="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode with long value with 100000000 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000001 Matches Found"
        current-match="1100"
        match-count="100000001"
        disabled ="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable navigate mode',
        html: `<gux-context-search
        placeholder="Search"
        title = "Disable Navigate Mode"
        value="Navigation Disabled"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "10 Matches Found"
        current-match="1"
        match-count="10"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable navigate mode with no matches',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Navigation Disabled"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "0 Match Found"
        current-match="0"
        match-count="0"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable navigate mode with 1 matches',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Navigation Disabled"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Match Found"
        current-match="0"
        match-count="1"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable navigate mode with 100000000 matches',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Navigation Disabled"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100000000 Match Found"
        current-match="1000"
        match-count="100000000"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode & disable Navigate Mode',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled Navigation Disable"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "0 Match Found"
        current-match="1"
        match-count="10"
        disabled ="true"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode & disable Navigate Mode with no match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled Navigation Disable"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "0 Match Found"
        current-match="0"
        match-count="0"
        disabled ="true"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode & disable Navigate Mode with 1 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled Navigation Disable"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Match Found"
        current-match="1"
        match-count="1"
        disabled ="true"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode & disable Navigate Mode with 1000000 match',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Search Disabled Navigation Disable"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1000000 Match Found"
        current-match="1"
        match-count="1000000"
        disabled ="true"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode & disable Navigate Mode with 100 match & long text',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "100 Match Found"
        current-match="1"
        match-count="100"
        disabled ="true"
        disable-navigation-mode="true"></gux-context-search>`
      },
      {
        description:
          'should render default control with all props in disable mode & disable Navigate Mode with 1000000 match & long text',
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Lorem ipsum dolor sit amet, lacinia blandit ultricies lorem aliquam, dui quam a viverra vivamus pellentesque, rhoncus aliquet proin eleifend."
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1000000 Match Found"
        current-match="1"
        match-count="1000000"
        disabled ="true"
        disable-navigation-mode="true"></gux-context-search>`
      }
    ].forEach(({ description, html }) => {
      it(description, async () => {
        const page = await newSpecPage({ components, html, language });
        expect(page.rootInstance).toBeInstanceOf(GuxContextSearch);
        expect(page.root).toMatchSnapshot();
      });
    });
  });

  describe('Class Logic', () => {
    let component: GuxContextSearch;

    beforeEach(async () => {
      const page = await newSpecPage({
        components: [GuxContextSearch],
        html: `<gux-context-search
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "10 Matches Found"
        current-match="10"
        match-count="10"></gux-context-search>`,
        language: 'en'
      });
      component = page.rootInstance;
    });

    it('builds', async () => {
      await component.componentWillLoad();
      component.componentDidLoad();
      component.render();
      expect(component).toBeTruthy();
    });

    it('componentDidLoad with invalid match value', async () => {
      component.matchCount = -1;
      await component.componentWillLoad();
      component.componentDidLoad();
      component.render();
      expect(component.matchCount).toBe(0);
    });

    it('componentDidLoad with invalid currentMatch', async () => {
      component.currentMatch = -1;
      component.matchCount = 1;
      await component.componentWillLoad();
      component.componentDidLoad();
      component.render();
      expect(component.matchCount).toBe(1);
      expect(component.currentMatch).toBe(1);
    });

    it('componentDidLoad with invalid currentMatch & matchCount', async () => {
      component.currentMatch = -1;
      component.matchCount = -1;
      await component.componentWillLoad();
      component.componentDidLoad();
      component.render();
      expect(component.matchCount).toBe(0);
      expect(component.currentMatch).toBe(0);
    });

    it('componentDidLoad with currentMatch greater than matchCount', async () => {
      component.currentMatch = 11;
      component.matchCount = 10;
      await component.componentWillLoad();
      component.componentDidLoad();
      component.render();
      expect(component.matchCount).toBe(10);
      expect(component.currentMatch).toBe(1);
    });

    it('componentDidLoad with currentMatch when matchCount is 0', async () => {
      component.currentMatch = 11;
      component.matchCount = 0;
      await component.componentWillLoad();
      component.componentDidLoad();
      component.render();
      expect(component.matchCount).toBe(0);
      expect(component.currentMatch).toBe(0);
    });

    describe('methods', () => {
      it('clear', async () => {
        const inputSpy = jest.fn();
        const navigateSpy = jest.fn();
        const focusSpy = jest.fn();
        component.input = {
          emit: inputSpy
        };
        component.navigate = {
          emit: navigateSpy
        };
        component.inputElement.focus = focusSpy;
        component.value = 'Test';
        component.matchCount = 100;
        component.currentMatch = 3;
        await component.clear();
        expect(component.value).toEqual('');
        expect(component.matchCount).toEqual(0);
        expect(component.currentMatch).toEqual(0);
        expect(component.inputElement.value).toEqual('');
        expect(component.inputElement.focus).toHaveBeenCalled();
        expect(component.input.emit).toHaveBeenCalledWith('');
        expect(component.navigate.emit).toHaveBeenCalledWith(0);
      });

      it('clear when disable is true', async () => {
        const inputSpy = jest.fn();
        const navigateSpy = jest.fn();
        const focusSpy = jest.fn();
        component.input = {
          emit: inputSpy
        };
        component.navigate = {
          emit: navigateSpy
        };
        component.inputElement.focus = focusSpy;
        component.disabled = true;
        component.value = 'Test';
        component.matchCount = 100;
        component.currentMatch = 3;
        await component.clear();
        expect(component.value).not.toEqual('');
        expect(component.matchCount).not.toEqual(0);
        expect(component.currentMatch).not.toEqual(0);
        expect(component.inputElement.value).not.toEqual('');
        expect(component.inputElement.focus).not.toHaveBeenCalled();
        expect(component.input.emit).not.toHaveBeenCalledWith('');
        expect(component.navigate.emit).not.toHaveBeenCalledWith(0);
      });

      it('setInputFocus', async () => {
        const focusSpy = jest.fn();
        component.inputElement.focus = focusSpy;
        await component.setInputFocus();
        expect(component.inputElement.focus).toHaveBeenCalled();
      });

      it('setLabelledBy', async () => {
        const id = 'ID';
        await component.setLabelledBy(id);
        expect(component.srLabelledby).toEqual(id);
      });
    });
  });
});
