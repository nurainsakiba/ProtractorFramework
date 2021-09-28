let homePage= function(){

    let first = element(by.model('first'));
    let second = element(by.model('second'));
    let go = element(by.css('[ng-click="doAddition()"]'));
    let operator = element(by.model('operator'));

    this.get= function(url){
        browser.get(url);
    };

    this.enterFrist= function(fno){
        first.sendKeys(fno);
    };

    this.op = function(sign){
        operator.sendKeys(sign);

    };

    this.enterSecond= function(sno){
        second.sendKeys(sno);

    };

    this.gobutton= function(){
        go.click();

    };

    this.verify= function(result){
        let output= element(by.cssContainingText('.ng-binding', result));
         expect(output.getText()).toEqual(result);
    };

};

module.exports= new homePage();