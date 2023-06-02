const utils = require('../helpers/utils')
const testData = require('../testConfig.json')

const loginUserName = '//input[@name="username"]'
const loginPassword = '//input[@name="password"]'
const loginSubmitButton = '.login-btn'

const userNameLabel = '[for="username"]'
const passwordLabel = '[for="password"]'

class LoginPage
{
    static async verifyTheLoginForm()
    {
        await utils.isDisplayed(userNameLabel);
        await utils.getTextAndExpectValue(userNameLabel, 'Username'); 
        await utils.isDisplayed(passwordLabel);
        await utils.getTextAndExpectValue(passwordLabel, 'Password');
        await utils.isDisplayed(loginSubmitButton);
        await utils.getTextAndExpectValue(loginSubmitButton, 'LOGIN');
    }
    
    static async loginForm()
    {
        await utils.typeText(loginUserName, "Jigarmodha");
        await utils.typeText(loginPassword, "karan123");
        await utils.waitForEnabled(loginSubmitButton, 2);
        await utils.clickOnElement(loginSubmitButton);
    }
    
}
module.exports = LoginPage