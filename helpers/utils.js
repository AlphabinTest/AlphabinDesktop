const { assert, expect } = require('chai')

class Utils {
  // static async setValue(locator, inputText, options = { slow: true }) {
  //     try {
  //       // await this.clearText(locator)
  //       if (options.slow) {
  //         for (let i = 0; i < inputText.length; i++) {
  //           const el = await $(locator);
  //           await el.addValue(inputText[i]);
  //           await this.wait(5);
  //         }
  //       }
  //     } catch (err) {
  //       logger.error(err);
  //       throw new Error(`not able to add value: ${err}`);
  //     }
  //   }

  //   static async sendText(locator, inputText, options = { slow: true }) {
  //     try {
  //       await this.clearText(locator);
  //       const el = await $(locator);
  //       await el.setValue(inputText);
  //       // await this.wait(5)
  //     } catch (err) {
  //        logger.error(err);
  //       throw new Error(`not able to send text: ${err}`);
  //     }
  // }
  static async typeText(locator, value) {
    const el = $(locator)
    await el.setValue(value)
  }

  static async clickOnElement(locator) {
    const el = $(locator)
    await el.click()
  }

  static async getData(locator) {
    const el = $(locator)
    return el.getText()
  }

  static async waitForElement(locator, timeOut) {
    const el = await $(locator)
    await el.waitForDisplayed(timeOut)
  }

  static async takeScreenshot() {
    try {
      await cucumberJson.attach(browser.takeScreenshot(), "image/png");
    } catch (err) {
      logger.error("Error " + err);
    }
  }
  static async pauseTime(time) {
    await browser.pause(time)
  }

  static async getCurrentUrl() {
    await browser.getUrl()
  }

  static async switchWindow(url) {
    await browser.switchWindow(url)
  }

  static async closingWindow() {
    await browser.closeWindow()
  }

  static async acceptAlert() {
    await browser.acceptAlert()
  }

  static async openSite(url) {
    await browser.url(url)
    await browser.maximizeWindow()
  }

  static async assertCurrentSite(actualSite) {
    expect(await browser.getUrl()).to.contain(actualSite)
  }

  static async waitForEnabled(locator, waitTimeInSeconds) {
    const el = await $(locator)
    await el.waitForEnabled({ timeout: waitTimeInSeconds * 1000 })
  }
  static async switchToParentFrame() {
    await browser.switchToParentFrame()
  }

  static async switchToDefault() {
    await browser.switchToDefault()
  }

  static async waitUntil(locator, timeoutInSeconds = 20) {
    await browser.waitUntil(
      async () => (await $(locator).getText()) === '2,823',
      {
        timeout: timeoutInSeconds * 1000, // 20 seconds                         
        timeoutMsg: 'expected text to be different after 20s'
      }
    )
  }

  static async isElementExist(locator) {
    const el = await $(locator)
    expect(el).to.be.exist

  }
  static async isDisplayed(locator) {
    // console.log('Element is : ',typeof locator)
    const el = await $(locator)
    return await el.isDisplayed()
  }

  static async getTextAndExpectValue(locator, expectedValue) {
    const element = await $(locator);
    const text = await element.getText();
    expect(text).to.equal(expectedValue);
  }

  static async isEnabled(locator) {
    const element = await $(locator);
    const isEnabled = await element.isEnabled();
    expect(isEnabled).to.be.true;
  }

}

module.exports = Utils