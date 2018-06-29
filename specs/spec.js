// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
	  
	  var appURL='http://juliemr.github.io/protractor-demo/';
	  
    browser.get(appURL);
	browser.sleep('3000');
	browser.driver.manage().window().maximize();
	
    element(by.model('first')).sendKeys(1);
	browser.driver.sleep(2000);
    element(by.model('second')).sendKeys(2);
    browser.driver.sleep(2000); 
    element(by.id('gobutton')).click();
    browser.driver.sleep(2000); 
	browser.driver.takeScreenshot
    expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is correct!
  });
});