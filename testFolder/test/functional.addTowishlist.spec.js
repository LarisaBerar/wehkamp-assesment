var homePage = require ('../page_objects/homePage.js');
var pdpPage = require ('../page_objects/pdpPage.js');
var wishlistPage = require ('../page_objects/wishlistPage.js');
var helperVariables = require ('../page_objects/helper.js');

describe('E2E flow test', function(){

    beforeEach(function(){
        browser.get("https://www.wehkamp.nl/");
        browser.driver.manage().deleteAllCookies();
    });

    var productWithFamilies = '332401';
    var productWithFamiliesName1 = 'Apple iPhone X 256GB';
    var productWithFamiliesPrice1 = '1329.-';
    var productWithFamiliesName2 = 'Apple iPhone X 64GB';
    var productWithFamiliesPrice2 = '1159.-';
    var productWithDifferentSizes = '557010';
    var productWithDifferentSizesName = 'Mart Visser trui';
    var productWithDifferentSizesPrice = '79.95';
    var productWithDifferentSizesSize = 'XXL';
    var simpleProduct = '891341';
    var simpleProductName = 'LEGO City zware reddingshelikopter 60166';
    var simpleProductPrice = '49.99';
    var simpleProductPriceDiscount = '39.99';
    
            
            it('add product with families to wishlist - no change', function(){
                homePage.searchTheProduct(productWithFamilies);
                pdpPage.pressAddToWishListButton();
                homePage.selectWishlistFromMenu();
                wishlistPage.expectProductNameAndProductPrice(productWithFamiliesName1, productWithFamiliesPrice1);                
            });

            it('add product with families to wishlist - change one attribute', function(){               
                homePage.searchTheProduct(productWithFamilies);
                pdpPage.selectAttributeGB();
                pdpPage.pressAddToWishListButton();
                homePage.selectWishlistFromMenu();
                wishlistPage.expectProductNameAndProductPrice(productWithFamiliesName2, productWithFamiliesPrice2);
            });
    
            it('add product with different sizes to wishlist - change one attribute (size)', function(){
                homePage.searchTheProduct(productWithDifferentSizes);
                pdpPage.selectSize();
                pdpPage.pressAddToWishListButton();
                homePage.selectWishlistFromMenu();
                wishlistPage.expectProductNameProductPriceProductSize(productWithDifferentSizesName, productWithDifferentSizesPrice, productWithDifferentSizesSize);
            });
    
            it('add simple product with discount to wishlist', function(){

                homePage.searchTheProduct(simpleProduct);
                pdpPage.pressAddToWishListButton();
                homePage.selectWishlistFromMenu();
                wishlistPage.expectProductNameAndProductPrice(simpleProductName, simpleProductPrice);
                wishlistPage.priceWithDiscount(simpleProductPriceDiscount);
                   
            });
    
        
        });