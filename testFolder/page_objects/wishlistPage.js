
var wishlistPage = function() { 

    this.productName = $('div[data-qa-id="wishlistItemTitle"]');
    this.productPrice = $$('.Currency_currency_1o0');
    this.attributeGB = element(by.cssContainingText('option', '64'));
    this.checksize = $('.Dropdown_selectLabel_J6v.Dropdown_fade_3Np.Dropdown_disabled_1wV');

    
    this.priceWithDiscount = function (discount){
        
        expect(this.productPrice.last().getText()).toEqual(discount);
     };


    this.expectProductNameAndProductPrice = function(prodName, prodPrice) {
        
        expect(this.productName.getText()).toEqual(prodName);
        expect(this.productPrice.first().getText()).toEqual(prodPrice);
        
     };

    this.expectProductNameProductPriceProductSize = function(prodName, prodPrice, prodSize) {
        
        expect(this.productName.getText()).toEqual(prodName);
        expect(this.productPrice.first().getText()).toEqual(prodPrice);
        expect(this.checksize.getText()).toEqual(prodSize);
        
     };



};

module.exports = new wishlistPage();