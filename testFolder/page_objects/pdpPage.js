var helperVariables = require ('../page_objects/helper.js');

var pdpPage = function() {
    
    this.addToWishList = $$('.Button_button_2zC.Button_button--clean_WC2.Button_button--sm_3g5.Button__button--block');
    this.attributeGB = element(by.cssContainingText('option', '64'));
    this.selectGBOption = element.all(by.className('input-select')).last();

    this.sizeXXL = $('a[data-reactid="57"]');
    this.selectedSize = $('.rollup-box.selected');
    this.selectSize = $$('.pdp-option--box ul').last();
    
 

    this.pressAddToWishListButton = function() {
        this.addToWishList.click();
    };

    this.selectAttributeGB = function() {              
        this.selectGBOption.$('[value = "64"]').click();
        helperVariables.waitForTextToBeFoundInElement(this.selectGBOption.$('[selected=""]'), '64');  
    };


    this.selectSize = function() {
        this.sizeXXL.click();
        helperVariables.waitForTextToBeFoundInElement(this.selectedSize, 'XXL');

    };

    
};
    
module.exports = new pdpPage();