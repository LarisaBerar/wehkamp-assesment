var homePage = function() {
    
    this.searchInput = $('#header-search-bar-input');
    this.searchButton = $('#header-search-bar-button');
    this.dropdown =  $('#header-self-service-link');
    this.wishList =  $$('a[href*="https://wensenlijst.wehkamp.nl/"]');

    this.searchTheProduct = function(product) {
        this.typeInSearch(product);
        this.pressSearchButton();     

    };

    this.selectWishlistFromMenu = function(){
        this.clickOnDropDown();
        this.selectWishListInMenu();

    };

    this.typeInSearch = function(value) {
        this.searchInput.sendKeys(value);
    };

    this.pressSearchButton = function() {
        this.searchButton.click();
    };
    
    this.clickOnDropDown = function() {
        this.dropdown.click();
    };
    
    this.selectWishListInMenu = function() {
        this.wishList.last().click();
    };

                    
    };
    
    module.exports = new homePage();