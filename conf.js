// conf.js

//var HTTPSProxyAgent = require('https-proxy-agent');
//var sauceRestAgent = new HTTPSProxyAgent("http://localhost:1234")

exports.config = {
	
	//sauceUser: process.env.SAUCE_USER_NAME,
  //sauceKey: process.env.SAUCE_ACCESS_KEY,
//sauceSeleniumAddress: process.env.SELENIUM_HOST + ':' + process.env.SELENIUM_PORT + '/wd/hub',

      sauceUser: 'debamalyaray',
      sauceKey: 'e59fdfd3-ec55-4478-8018-cbc753a51601',
	  
	 // sauceSeleniumAddress: 'http://debamalyaray:e59fdfd3-ec55-4478-8018-cbc753a51601@ondemand.saucelabs.com:443/wd/hub',
    //sauceAgent: sauceRestAgent,

    // webDriverProxy: 'http://<proxy>:<port>',

	//sauceSeleniumAddress: 'https://debamalyaray:e59fdfd3-ec55-4478-8018-cbc753a51601@ondemand.saucelabs.com:443/wd/hub',
	//sauceSeleniumAddress: 'localhost:4445/wd/hub',
    //specs: ['specs/*spec.js'],
    specs: ['specs/techassist.js'],
	// specs: ['specs/spec.js'],
    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'chrome',
        version: '63',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 2
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        //printSessionId("Insert Job Name Here");
    }
}
