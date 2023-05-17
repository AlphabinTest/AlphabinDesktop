const { config } = require('./wdio.conf');
const testData = require('./testConfig.json');

if (testData.browser === "chrome") {
    if (testData.browserStack) {
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

else if (testData.browser === "firefox") {
    if (testData.browserStack) {
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'Firefox',
                acceptInsecureCerts: true,
                "os": "OS X",
                "osVersion": "Sierra",
                "browserVersion": "92.0",
                "local": "false",
            }
        ];
        config.services = [['browserstack']];
    } else {
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'firefox',
                acceptInsecureCerts: true,
            }
        ];
        config.services = [['selenium-standalone']];
    }
}

else if (testData.browser === "safari") {
    if (testData.browserStack) {
        config.capabilities = [
            {
                maxInstances: 5,
                browserName: 'Safari',
                acceptInsecureCerts: true,
                "os": "OS X",
                "osVersion": "Sierra",
                "browserVersion": "10.1",
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
        config.services = [['selenium-standalone']];
    }
}

exports.config = config;