let homePage = require ('../pages/homePage');
describe('calculator', function(){

    it ('addition test', function(){

            /*browser.get('http://juliemr.github.io/protractor-demo/');
           
            element(by.model('first')).sendKeys('4');
            element(by.model('second')).sendKeys('2');
            element(by.css('[ng-click="doAddition()"]')).click();
            let result= element(by.cssContainingText('.ng-binding', '6'));
            expect(result.getText()).toEqual('6');
            browser.sleep(2000);*/

            homePage.get('http://juliemr.github.io/protractor-demo/');
           
            homePage.enterFrist('3');
            homePage.enterSecond('3');

            homePage.gobutton();

            homePage.verify('6');
            browser.sleep(2000);

        });

        it ('substraction test', function(){

      

            homePage.get('http://juliemr.github.io/protractor-demo/');
           
            homePage.enterFrist('4');
            homePage.op('-');
            homePage.enterSecond('3');

            homePage.gobutton();

            homePage.verify('1');
            browser.sleep(2000);

        });


});
        
