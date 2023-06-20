const utils = require('../helpers/utils')

//Locators for the header elements of the homepage
const _alphabinLogo = '.header__logo'
const _homeButtonHomePage = '//a[contains(text(), "Home")]'
const _servicesButtonHomePage = '.dropdown'
const _aboutUsHomePage = '//a[contains(text(), "About us")]'
const _contactUsHomePage = '//a[contains(text(), "Contact us")]'
const _loginButtonHomePage = '[href="login"]'
const _signupButtonHomePage = '[href="registration"]'

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

    static async verifyDropDownServices()
    {
        await utils.hoverOverElement(_servicesButtonHomePage);
    }

    static async clickOnAlphaTestLogo()
    {
        await utils.clickOnElement(_alphabinLogo)
    }

    static async clickOnHomeButton()
    {
        await utils.clickOnElement(_homeButtonHomePage)
    }

    static async clickOnServices()
    {
        await utils.clickOnElement(_servicesButtonHomePage)
    }

    static async clickOnAboutUs()
    {
        await utils.clickOnElement(_aboutUsHomePage)
    }

    static async clickOnContactUs()
    {
        await utils.clickOnElement(_contactUsHomePage)
    }

    static async clickOnLogIn()
    {
        await utils.clickOnElement(_loginButtonHomePage)
    }

    static async clickOnSignUp()
    {
        await utils.clickOnElement(_signupButtonHomePage)
    }
}
module.exports = HeaderPage_HomePage