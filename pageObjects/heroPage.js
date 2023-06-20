const utils = require('../helpers/utils')

//Locators for the hero page elements of the homepage
const _qaStrategiesDisplayHeroPage = '//div[@class="banner-content"]//h1'
const _deliveringQualityDisplayHeroPage = '//div[@class="banner-content"]//p'
const _strategiesButtonHeroPage = '.cta-button'
const _qaImageHeroPage = '[src="../static/assets/imgs/img1.png"]'
const _ourServicesTextHeroPage = '//div[@class="container services__container"]//h2'

//Locators for the services on the hero page of homepage
const _serviceOneModelTesting = '//div[@class="services__list"]//a[1]'
const _serviceTwoWebAutomation = '//div[@class="services__list"]//a[2]'
const _serviceThreeMobileUI = '//div[@class="services__list"]//a[3]'
const _serviceFourAPITesting = '//div[@class="services__list"]//a[4]'
const _serviceFiveSmartUITesting = '//div[@class="services__list"]//a[5]'
const _serviceSixCapacityPlanning = '//div[@class="services__list"]//a[6]'
const _serviceSevenManualFunctional = '//div[@class="services__list"]//a[7]'
//Locators for Verification of services 
const _modelTestingTitle = '//h3[contains(text(), "AI/ML Model Testing")]'
const _modelTestingPara = '//p[contains(text(), " the accuracy, reliability, and performance of your AI/ML models with comprehensive testing solutions.")]'
const _uiAutomationTitle = '//a[@href="product2"]//h3[contains(text(), "UI Automation Testing (Web)")]'
const _uiAutomationPara = '//a[@href="product2"]//p[contains(text(), "Save time and improve ")]'
const _mobileAutomationTitle = '//h3[contains(text(), "UI Automation Testing (Mobile)")]'
const _mobileAutomationPara = '//p[contains(text(), "Ensure a seamless user experience")]'
const _apiTestingTitle = '//h3[contains(text(), "API Automation Testing")]'
const _apiTestingPara = '//p[contains(text(), "APIs with automated testing")]'
const _smartUITitle = '//h3[contains(text(), "Smart UI Automation Testing (Web)")]'
const _smartUIPara = '//p[contains(text(), "Utilize AI-powered testing")]'
const _capacityPlanningTitle = '//h3[contains(text(), "QA Performance & Capacity Planning")]'
const _capcityPlanningPara = '//p[contains(text(), "high traffic loads")]'
const _manualFunctionalTitle = '//h3[contains(text(), "Manual Functional Testing")]'
const _manualFuncitonPara = "//p[contains(text(), 'thorough manual testing')]"


class HeroPage_HomePage 
{

    static async verifyHeroPage()
    {
        await utils.getTextAndExpectValue(_qaStrategiesDisplayHeroPage, 'Empowering Your Business with Our Proven QA Strategies');
        await utils.getTextAndExpectValue(_deliveringQualityDisplayHeroPage, 'Delivering Quality Excellence with Our Comprehensive QA Solutions');
        await utils.isElementExist(_strategiesButtonHeroPage);
        await utils.getTextAndExpectValue(_strategiesButtonHeroPage, 'Experience the Benefits of Our QA Strategies Now!');
        await utils.isElementExist(_qaImageHeroPage);
        await utils.getTextAndExpectValue(_ourServicesTextHeroPage, 'Our Services');
    }

    static async ourServicesHeroPageExistence() 
    {
        await utils.isDisplayed(_serviceOneModelTesting);
        await utils.isEnabled(_serviceOneModelTesting);

        await utils.isDisplayed(_serviceTwoWebAutomation);
        await utils.isEnabled(_serviceTwoWebAutomation);

        await utils.isDisplayed(_serviceThreeMobileUI);
        await utils.isEnabled(_serviceThreeMobileUI);

        await utils.isDisplayed(_serviceFourAPITesting);
        await utils.isEnabled(_serviceFourAPITesting);

        await utils.isDisplayed(_serviceFiveSmartUITesting);
        await utils.isEnabled(_serviceFiveSmartUITesting);

        await utils.isDisplayed(_serviceSixCapacityPlanning);
        await utils.isEnabled(_serviceSixCapacityPlanning);

        await utils.isDisplayed(_serviceSevenManualFunctional);
        await utils.isEnabled(_serviceSevenManualFunctional);
    }

    static async ourServicesHeroPageVerification() 
    {
        await utils.getTextAndExpectValue(_modelTestingTitle, 'AI/ML Model Testing');
        await utils.getTextAndExpectValue(_modelTestingPara, 'Ensure the accuracy, reliability, and performance of your AI/ML models with comprehensive testing solutions.');
        await utils.getTextAndExpectValue(_uiAutomationTitle, 'UI Automation Testing (Web)');
        await utils.getTextAndExpectValue(_uiAutomationPara, "Save time and improve accuracy with automated testing of your web application's user interface.");
        await utils.getTextAndExpectValue(_mobileAutomationTitle, "UI Automation Testing (Mobile)");
        await utils.getTextAndExpectValue(_mobileAutomationPara, "Ensure a seamless user experience across multiple devices and platforms with automated mobile UI testing.");
        await utils.getTextAndExpectValue(_apiTestingTitle, 'API Automation Testing');
        await utils.getTextAndExpectValue(_apiTestingPara, 'Streamline your development process and improve the quality of your APIs with automated testing.');
        await utils.getTextAndExpectValue(_smartUITitle, 'Smart UI Automation Testing (Web)');
        await utils.getTextAndExpectValue(_smartUIPara, "Utilize AI-powered testing to optimize your web application's user interface and user experience.");
        await utils.getTextAndExpectValue(_capacityPlanningTitle, "QA Performance & Capacity Planning");
        await utils.getTextAndExpectValue(_capcityPlanningPara, "Ensure your application can handle high traffic loads and provide optimal performance for your users.");
        await utils.getTextAndExpectValue(_manualFunctionalTitle, 'Manual Functional Testing');
        await utils.getTextAndExpectValue(_manualFuncitonPara, 'Ensure that your software meets the functional requirements of your users with thorough manual testing.');
    }

    static async depthVerificationOfServices()
    {
        await utils.scrollUntilElementVisible(_apiTestingTitle);
        await utils.clickOnElement(_modelTestingTitle);
        await utils.waitForPageLoad();
    }
}
module.exports = HeroPage_HomePage