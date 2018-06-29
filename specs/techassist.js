// spec.js
describe('Protractor Demo TechAssistWeb', function() {
  it('should login', function() {
	  
	
	var appURL='http://169.46.38.55:30481';
    browser.get(appURL);
	browser.sleep('2000');
	browser.driver.manage().window().maximize();
	//browser.sleep('2000');
 
    element(by.id('username')).click();
	//browser.driver.sleep(1000);
	element(by.id('username')).sendKeys('abc@in.ibm.com');
	 //browser.driver.sleep(1000);
	
	element(by.id('password')).click();
	//browser.driver.sleep(1000);
	element(by.id('password')).sendKeys('password');
	 //browser.driver.sleep(1000);
 
    element(by.id('btnSubmit')).click();
	
	browser.driver.sleep(2000);
	browser.driver.takeScreenshot
	 browser.close(); 
	 
  });
});