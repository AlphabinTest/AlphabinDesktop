const utils = require('../helpers/utils')

class HeaderPage_HomePage
{
    static async headerButtonsExistence()
    {
        await utils.isElementExist(_alphabinLogo);
        await utils.isDisplayed(_alphabinLogo)
        await utils.isElementExist(_homeButtonHomePage);
        await utils.isDisplayed(_homeButtonHomePage);
        await utils.isElementExist(_servicesButtonHomePage);
        await utils.isDisplayed(_servicesButtonHomePage);
        await utils.isElementExist(_aboutUsHomePage);
        await utils.isDisplayed(_aboutUsHomePage);
        await utils.isElementExist(_contactUsHomePage);
        await utils.isDisplayed(_contactUsHomePage);
        await utils.isElementExist(_loginButtonHomePage);
        await utils.isDisplayed(_loginButtonHomePage);
        await utils.isElementExist(_signupButtonHomePage);
        await utils.isDisplayed(_signupButtonHomePage);
    }

    static async verifyHeaderButtons()
    {
        await utils.getTextAndExpectValue(_alphabinLogo, 'Alpha Test');
        await utils.getTextAndExpectValue(_homeButtonHomePage, 'Home');
        await utils.getTextAndExpectValue(_servicesButtonHomePage, 'Services');
        await utils.getTextAndExpectValue(_aboutUsHomePage, 'About us');
        await utils.getTextAndExpectValue(_contactUsHomePage, 'Contact us');
        await utils.getTextAndExpectValue(_loginButtonHomePage, 'Log in');
        await utils.getTextAndExpectValue(_signupButtonHomePage, 'Sign up');
    }
}
module.exports = HeaderPage_HomePage