const utils = require('../helpers/utils')

const _alphaTestTitle = "//h4[contains(text(), 'Alpha Test')]"
const _alphaTestPara = "//p[contains(text(), 'Lorem ipsum dolor sit')]"

const _allServices = '//div[@class="col-lg-2 all-serv"]//h5'
const _uiTesting = '//div[@class="col-lg-2 all-serv"]//p[1]'
const _functionalTesting = '//div[@class="col-lg-2 all-serv"]//p[2]'
const _usabilityTesting = '//div[@class="col-lg-2 all-serv"]//p[3]'
const _performanceTesting = '//div[@class="col-lg-2 all-serv"]//p[4]'

const _usefulLinks = '//div[@class="col-lg-2 user-link"]//h5'
const _aboutUs = '//div[@class="col-lg-2 user-link"]//p[1]'
const _contactUs = '//div[@class="col-lg-2 user-link"]//p[2]'
const _blog = '//div[@class="col-lg-2 user-link"]//p[3]'

const _social = '//div[@class="col-lg-2"]//h5'
const _linkedinIcon = '[class="bi bi-linkedin"]'
const _skypeIcon = '[class="bi bi-skype"]'
const _instagramIcon = '[class="bi bi-instagram icon"]'
const _facebookIcon = '[class="bi bi-facebook icon"]'
const _twitterIcon = '[class="bi bi-twitter icon"]'

class FooterPage_HomePage
{
    static async footerElementsVerification()
    {
        await utils.getTextAndExpectValue(_alphaTestTitle, "Alpha Test");
        await utils.getTextAndExpectValue(_alphaTestPara, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ducimus accusantium corrupti quod odio exercitationem doloribus laborum illo maiores sit.")
        await utils.getTextAndExpectValue(_allServices, "All Services");
        await utils.getTextAndExpectValue(_uiTesting, "UI Testing");
        await utils.getTextAndExpectValue(_functionalTesting, "Functional Testing");
        await utils.getTextAndExpectValue(_usabilityTesting, "Usability Testing");
        await utils.getTextAndExpectValue(_performanceTesting, "Performance Testing");
        await utils.getTextAndExpectValue(_usefulLinks, "Userful Links");
        await utils.getTextAndExpectValue(_aboutUs, "About Us");
        await utils.getTextAndExpectValue(_contactUs, "Contact Us");
        await utils.getTextAndExpectValue(_blog, "Blog");
        await utils.getTextAndExpectValue(_social, "Social");
        await utils.isDisplayed(_linkedinIcon);
        await utils.isDisplayed(_skypeIcon);
        await utils.isDisplayed(_instagramIcon);
        await utils.isDisplayed(_facebookIcon);
        await utils.isDisplayed(_twitterIcon);

    }
}
module.exports = FooterPage_HomePage