import { newE2EPage } from '@stencil/core/testing';

describe('gux-context-search', () => {
  describe('#render', () => {
    [
      {
        description: 'default control with 0 Match',
        html: `<gux-context-search
        lang="en"
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
        description: 'default control with 1 Match',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Matches Found"
        current-match="1"
        match-count="1"></gux-context-search>`
      },
      {
        description: 'default control with 2 Match',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "2 Matches Found"
        current-match="1"
        match-count="2"></gux-context-search>`
      },
      {
        description: 'default control with 2000000 Match',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "2000000 Matches Found"
        current-match="1"
        match-count="2000000"></gux-context-search>`
      },
      {
        description: 'control with 0 Match disable-navigation-mode="true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
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
        description: 'control with 1 Match disable-navigation-mode="true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Matches Found"
        current-match="1"
        match-count="1"></gux-context-search>`
      },
      {
        description:
          'default control with 2 Match disable-navigation-mode="true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "2 Matches Found"
        current-match="1"
        match-count="2"></gux-context-search>`
      },
      {
        description:
          'default control with 200000 Match disable-navigation-mode="true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "200000 Matches Found"
        current-match="1"
        match-count="200000"></gux-context-search>`
      },
      {
        description: 'default control with 0 Match disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disabled ="true"
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
        description: 'default control with 1 Match disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disabled ="true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Matches Found"
        current-match="1"
        match-count="1"></gux-context-search>`
      },
      {
        description: 'default control with 2 Match disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disabled ="true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "2 Matches Found"
        current-match="1"
        match-count="2"></gux-context-search>`
      },
      {
        description: 'default control with 200000 Match disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disabled ="true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "200000 Matches Found"
        current-match="1"
        match-count="200000"></gux-context-search>`
      },
      {
        description:
          'control with 0 Match disable-navigation-mode="true" & disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        disabled= "true"
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
          'control with 1 Match disable-navigation-mode="true" & disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        disabled= "true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "1 Matches Found"
        current-match="1"
        match-count="1"></gux-context-search>`
      },
      {
        description:
          'default control with 2 Match disable-navigation-mode="true" disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        disabled= "true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "2 Matches Found"
        current-match="1"
        match-count="2"></gux-context-search>`
      },
      {
        description:
          'default control with 200000 Match disable-navigation-mode="true" disabled= "true"',
        html: `<gux-context-search
        lang="en"
        placeholder="Search"
        title = "Context Search"
        value="Default Search Text"
        disable-navigation-mode="true"
        disabled= "true"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        erase-label="clear"
        next-label="Next"
        previous-label="Previous"
        navigation-label= "200000 Matches Found"
        current-match="1"
        match-count="200000"></gux-context-search>`
      }
    ].forEach(({ description, html }) => {
      it(description, async () => {
        const page = await newE2EPage({ html });
        const element = await page.find('gux-context-search');
        const previousButton = await page.find('.gux-previous-button');
        const nextButton = await page.find('.gux-next-button');
        const clearButton = await page.find('.gux-clear-button');
        const input = await element.find('.gux-text-clearable');
        expect(element.outerHTML).toMatchSnapshot();

        previousButton.click();
        await page.waitForChanges();
        expect(element.outerHTML).toMatchSnapshot();

        nextButton.click();
        await page.waitForChanges();
        expect(element.outerHTML).toMatchSnapshot();

        clearButton.click();
        await page.waitForChanges();
        expect(element.outerHTML).toMatchSnapshot();

        await input.press('KeyT');
        await input.press('KeyE');
        await input.press('KeyS');
        await input.press('KeyT');
        await page.waitForChanges();
        expect(element.outerHTML).toMatchSnapshot();
      });
    });
  });

  describe('clear button', () => {
    it('should appear when the value is not empty', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" current-match="1" match-count="20"></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(clearButton).toBeNull();
      expect(element).toHaveClass('hydrated');

      await input.press('KeyT');
      await input.press('KeyE');
      await input.press('KeyS');
      await input.press('KeyT');
      await page.waitForChanges();
      expect(inputSpy).toHaveReceivedEventTimes(4);
      expect(navigateSpy).not.toHaveReceivedEvent();
      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      expect(clearButton).not.toBeNull();

      let value = await input.getProperty('value');
      let currentMatch = await element.getProperty('currentMatch');
      let matchCount = await element.getProperty('matchCount');
      expect(value).toBe('test');
      expect(currentMatch).toBe(1);
      expect(matchCount).toBe(20);

      clearButton.click();
      await page.waitForChanges();
      value = await input.getProperty('value');
      currentMatch = await element.getProperty('currentMatch');
      matchCount = await element.getProperty('matchCount');
      expect(inputSpy).toHaveReceivedEventTimes(5);
      expect(navigateSpy).toHaveReceivedEventTimes(1);
      expect(value).toBe('');
      expect(currentMatch).toBe(0);
      expect(matchCount).toBe(0);
    });

    it('should clickable when the disableNavigationMode is true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" current-match="1" match-count="20" disable-navigation-mode="true" ></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(clearButton).toBeNull();
      expect(element).toHaveClass('hydrated');

      await input.press('KeyT');
      await input.press('KeyE');
      await input.press('KeyS');
      await input.press('KeyT');
      await page.waitForChanges();
      expect(inputSpy).toHaveReceivedEventTimes(4);
      expect(navigateSpy).not.toHaveReceivedEvent();
      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      expect(clearButton).not.toBeNull();

      let value = await input.getProperty('value');
      let currentMatch = await element.getProperty('currentMatch');
      let matchCount = await element.getProperty('matchCount');
      expect(value).toBe('test');
      expect(currentMatch).toBe(1);
      expect(matchCount).toBe(20);

      clearButton.click();
      await page.waitForChanges();
      value = await input.getProperty('value');
      currentMatch = await element.getProperty('currentMatch');
      matchCount = await element.getProperty('matchCount');
      expect(inputSpy).toHaveReceivedEventTimes(5);
      expect(navigateSpy).toHaveReceivedEventTimes(1);
      expect(value).toBe('');
      expect(currentMatch).toBe(0);
      expect(matchCount).toBe(0);
    });

    it('should not clickable when the disable is true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" value="TEST" current-match="1" match-count="20" disabled="true" ></gux-context-search>'
      );

      const element = await page.find('gux-context-search');
      const clearButton = await page.find('.gux-clear-button');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');
      let value = await input.getProperty('value');
      let currentMatch = await element.getProperty('currentMatch');
      let matchCount = await element.getProperty('matchCount');

      expect(element).toHaveClass('hydrated');
      expect(clearButton).not.toBeNull();

      expect(value).toBe('TEST');
      expect(currentMatch).toBe(1);
      expect(matchCount).toBe(20);
      expect(clearButton).toHaveAttribute('disabled');

      clearButton.click();
      await page.waitForChanges();

      value = await input.getProperty('value');
      currentMatch = await element.getProperty('currentMatch');
      matchCount = await element.getProperty('matchCount');
      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(value).toBe('TEST');
      expect(currentMatch).toBe(1);
      expect(matchCount).toBe(20);
    });
  });

  describe('navigate buttons', () => {
    it('should appear when the value is not empty', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" value="Test" current-match="1" match-count="3"></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      let nextButton = await page.find('.gux-next-button');
      let previousButton = await page.find('.gux-previous-button');
      let resultSpan = await page.find('.gux-navigation-result');
      let matchCount = await element.getProperty('matchCount');
      let currentMatch = await element.getProperty('currentMatch');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(element).toHaveClass('hydrated');
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(1);

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(1);
      expect(navigateSpy).toHaveReceivedEventDetail(2);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('2 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(2);

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(2);
      expect(navigateSpy).toHaveReceivedEventDetail(3);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('3 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(3);

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(3);
      expect(navigateSpy).toHaveReceivedEventDetail(1);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(1);

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(4);
      expect(navigateSpy).toHaveReceivedEventDetail(3);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('3 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(3);

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(5);
      expect(navigateSpy).toHaveReceivedEventDetail(2);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('2 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(2);

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(6);
      expect(navigateSpy).toHaveReceivedEventDetail(1);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(1);

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(7);
      expect(navigateSpy).toHaveReceivedEventDetail(3);
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('3 of 3');
      expect(matchCount).toBe(3);
      expect(currentMatch).toBe(3);

      await clearButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).toHaveReceivedEvent();
      expect(navigateSpy).toHaveReceivedEventTimes(8);
      expect(navigateSpy).toHaveReceivedEventDetail(0);
      expect(clearButton).toBeNull();
      expect(nextButton).toBeNull();
      expect(previousButton).toBeNull();
      expect(resultSpan).toBeNull();
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
    });

    it('should be disabled when the match is zero', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" value="Test" current-match="0" match-count="0"></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      let nextButton = await page.find('.gux-next-button');
      let previousButton = await page.find('.gux-previous-button');
      let resultSpan = await page.find('.gux-navigation-result');
      let matchCount = await element.getProperty('matchCount');
      let currentMatch = await element.getProperty('currentMatch');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(element).toHaveClass('hydrated');
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('0 of 0');
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('0 of 0');
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('0 of 0');
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');
    });

    it('should be disabled when the disableNavigationMode is true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" value="Test" current-match="1" match-count="1" disable-navigation-mode="true" ></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      let nextButton = await page.find('.gux-next-button');
      let previousButton = await page.find('.gux-previous-button');
      let resultSpan = await page.find('.gux-navigation-result');
      let matchCount = await element.getProperty('matchCount');
      let currentMatch = await element.getProperty('currentMatch');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(element).toHaveClass('hydrated');
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 Match');
      expect(matchCount).toBe(1);
      expect(currentMatch).toBe(1);
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 Match');
      expect(matchCount).toBe(1);
      expect(currentMatch).toBe(1);
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 Match');
      expect(matchCount).toBe(1);
      expect(currentMatch).toBe(1);
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');
    });

    it('should be disabled when the disableNavigationMode is true & disabled is true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" value="Test" current-match="0" match-count="0"  disabled="true" disable-navigation-mode="true" ></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      let nextButton = await page.find('.gux-next-button');
      let previousButton = await page.find('.gux-previous-button');
      let resultSpan = await page.find('.gux-navigation-result');
      let matchCount = await element.getProperty('matchCount');
      let currentMatch = await element.getProperty('currentMatch');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(element).toHaveClass('hydrated');
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('0 Matches');
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
      expect(clearButton).toHaveAttribute('disabled');
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('0 Matches');
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
      expect(clearButton).toHaveAttribute('disabled');
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('0 Matches');
      expect(matchCount).toBe(0);
      expect(currentMatch).toBe(0);
      expect(clearButton).toHaveAttribute('disabled');
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');
    });

    it('should be disabled when the disabled is true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" value="Test" current-match="1" match-count="1" disabled="true"></gux-context-search>'
      );

      let element = await page.find('gux-context-search');
      let clearButton = await page.find('.gux-clear-button');
      let nextButton = await page.find('.gux-next-button');
      let previousButton = await page.find('.gux-previous-button');
      let resultSpan = await page.find('.gux-navigation-result');
      let matchCount = await element.getProperty('matchCount');
      let currentMatch = await element.getProperty('currentMatch');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');

      expect(element).toHaveClass('hydrated');
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 of 1');
      expect(matchCount).toBe(1);
      expect(currentMatch).toBe(1);
      expect(clearButton).toHaveAttribute('disabled');
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await nextButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 of 1');
      expect(matchCount).toBe(1);
      expect(currentMatch).toBe(1);
      expect(clearButton).toHaveAttribute('disabled');
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');

      await previousButton.click();
      await page.waitForChanges();

      clearButton = await page.find('.gux-clear-button');
      element = await page.find('gux-context-search');
      nextButton = await page.find('.gux-next-button');
      previousButton = await page.find('.gux-previous-button');
      resultSpan = await page.find('.gux-navigation-result');
      matchCount = await element.getProperty('matchCount');
      currentMatch = await element.getProperty('currentMatch');

      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      expect(clearButton).not.toBeNull();
      expect(nextButton).not.toBeNull();
      expect(previousButton).not.toBeNull();
      expect(resultSpan).not.toBeNull();
      expect(resultSpan.innerText).toEqual('1 of 1');
      expect(matchCount).toBe(1);
      expect(currentMatch).toBe(1);
      expect(clearButton).toHaveAttribute('disabled');
      expect(nextButton).toHaveAttribute('disabled');
      expect(previousButton).toHaveAttribute('disabled');
    });
  });

  describe('Input Field', () => {
    it('should not allow key entry when disabled true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" current-match="1" match-count="20" disabled="true" ></gux-context-search>'
      );

      const element = await page.find('gux-context-search');
      const clearButton = await page.find('.gux-clear-button');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');
      let value = await input.getProperty('value');

      expect(input).toHaveAttribute('disabled');
      expect(clearButton).toBeNull();
      expect(value).toBe('');

      await input.press('KeyT');
      await input.press('KeyE');
      await input.press('KeyS');
      await input.press('KeyT');
      await page.waitForChanges();
      expect(inputSpy).not.toHaveReceivedEvent();
      expect(navigateSpy).not.toHaveReceivedEvent();
      value = await input.getProperty('value');

      expect(value).toBe('');
    });

    it('should  allow key entry when disable-navigate-mode is true', async () => {
      const page = await newE2EPage();

      await page.setContent(
        '<gux-context-search lang="en" current-match="1" match-count="20" disable-navigate-mode="true" ></gux-context-search>'
      );

      const element = await page.find('gux-context-search');
      const clearButton = await page.find('.gux-clear-button');
      const input = await element.find('.gux-text-clearable');
      const navigateSpy = await page.spyOnEvent('navigate');
      const inputSpy = await page.spyOnEvent('input');
      let value = await input.getProperty('value');

      expect(input).not.toHaveAttribute('disabled');
      expect(clearButton).toBeNull();
      expect(value).toBe('');

      await input.press('KeyT');
      await input.press('KeyE');
      await input.press('KeyS');
      await input.press('KeyT');
      await page.waitForChanges();
      expect(inputSpy).toHaveReceivedEventTimes(4);
      expect(navigateSpy).not.toHaveReceivedEvent();
      value = await input.getProperty('value');

      expect(value).toBe('test');
    });
  });
});
