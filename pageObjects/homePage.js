const utils = require('../helpers/utils')
const headerHomePage = require('./headerPage')
const heroHomePage = require('./heroPage')
const footerHomePage = require('./footerPage')

//Locators for the header elements of the homepage
const _alphabinLogo = '.header__logo'
const _homeButtonHomePage = '//a[contains(text(), "Home")]'
const _servicesButtonHomePage = '.dropdown'
const _aboutUsHomePage = '//a[contains(text(), "About us")]'
const _contactUsHomePage = '//a[contains(text(), "Contact us")]'
const _loginButtonHomePage = '[href="login"]'
const _signupButtonHomePage = '[href="registration"]'

class HomePage
{
    //All the following tests are for the header of the Home page
    static async verifyHeaderPageDetails()
    {
        await headerHomePage.headerButtonsExistence();
        await headerHomePage.verifyHeaderButtons();
    }

    static async clickOnLogInButton()
    {
        await utils.clickOnElement(_loginButtonHomePage);
    }

    static async clickOnSignUpButton()
    {
        await utils.clickOnElement(_signupButtonHomePage);
    }

    //All the following tests are for Hero page of the Home page
    static async verifyHeroPageDetails()
    {
        await heroHomePage.verifyHeroPage();
    }

    static async verifyServicesOnHomePage()
    {
        await heroHomePage.ourServicesHeroPageExistence();
        await heroHomePage.ourServicesHeroPageVerification();
        await heroHomePage.depthVerificationOfServices();
    }

    //All the following tests are for the footer section of the Home page
    static async verifyFooterOfHomePage()
    {
        await footerHomePage.footerElementsVerification();
    }
}
module.exports = HomePage