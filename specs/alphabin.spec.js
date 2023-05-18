const testData = require('../testConfig.json')
const utils = require('../helpers/utils')
const { assert, expect } = require('chai')

describe('Google chrome test', async()=>
{
    it('Google.com test', async()=>
    {
        await utils.openSite(testData.baseUrl)
        await utils.pauseTime(3000)
        await utils.assertCurrentSite(testData.baseUrl)
    })
})