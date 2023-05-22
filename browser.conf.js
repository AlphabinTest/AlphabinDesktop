const { config } = require('./wdio.conf');
const testData = require('./testConfig.json');

if (testData.browser === "chrome") {
    if (testData.browserStack) {
        config.user= testData.browserStackUserName,
        config.key= testData.browserStackKey,
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'Chrome',
                acceptInsecureCerts: true,
                "os": "OS X",
                "osVersion": "Sierra",
                "browserVersion": "103.0",
                "local": "false",
            }
        ];
        config.services = [['browserstack']];
    } else {
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'chrome',
                acceptInsecureCerts: true,
                'goog:chromeOptions': {
                    args: [`${testData.executionmode}`, '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
                }
            }
        ];
        config.services = [['chromedriver']];
    }
}
if (testData.browser === "safari") {
    if (testData.browserStack) {
        config.user= testData.browserStackUserName,
        config.key= testData.browserStackKey,
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'Safari',
                acceptInsecureCerts: true,
                "os": "OS X",
                "osVersion": "Mojave",
                "browserVersion": "12.1",
                "local": "false",
            }
        ];
        config.services = [['browserstack']];
    } else {
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'safari',
            }
        ];
        config.services = [['safaridriver']];
    }
}

exports.config = config;