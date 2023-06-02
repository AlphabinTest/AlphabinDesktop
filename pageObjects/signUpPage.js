const utils = require('../helpers/utils')
const testData = require('../testConfig.json')

const userNameLabel = '[for="firstname"]'
const emailLabel = '[for="email"]'
const passwordLabel = '[for="password"]'
const confirmPasswordLabel = '[for="confirm-password"]'
const registerSubmitButton = '.registration-btn'

const userNameInput = '[name="username"]'
const emailInput = '[name="email"]'
const passwordInput = '[name="password1"]'
const confirmPasswordInput = '[name="password2"]'

class signUpPage
{
    static async verifyTheSignUpForm()
    {
        await utils.isDisplayed(userNameLabel);
        await utils.getTextAndExpectValue(userNameLabel, 'Username');
        await utils.isDisplayed(emailLabel);
        await utils.getTextAndExpectValue(emailLabel, 'Email');
        await utils.isDisplayed(passwordLabel);
        await utils.getTextAndExpectValue(passwordLabel, 'Password');
        await utils.isDisplayed(confirmPasswordLabel);
        await utils.getTextAndExpectValue(confirmPasswordLabel, 'Confirm Password');
        await utils.isDisplayed(registerSubmitButton);
        await utils.getTextAndExpectValue(registerSubmitButton, 'REGISTRATION');
        await utils.isEnabled(userNameInput);
        await utils.isEnabled(emailInput);
        await utils.isEnabled(passwordInput);
        await utils.isEnabled(confirmPasswordInput);
    }

    static async signUpForm(username, email)
    {
        await utils.typeText(userNameInput, username);
        await utils.typeText(emailInput, email);
        await utils.typeText(passwordInput, 'password123');
        await utils.typeText(confirmPasswordInput, 'password123');
        await utils.isEnabled(registerSubmitButton);
        await utils.clickOnElement(registerSubmitButton);
    }
}
module.exports = signUpPage