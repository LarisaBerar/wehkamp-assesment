exports.config = {
    
        capabilities: {
            'browserName': 'chrome'
        },

        jasmineNodeOpts: {
            defaultTimeoutInterval: 2500000
        },
    
        seleniumAddress: 'http://localhost:4444/wd/hub',
    
        specs: ['../test/functional.addTowishlist.spec.js'] ,
        framework: 'jasmine2' ,
        performance : true ,
    
        onPrepare: function () {
            
            browser.driver.manage().window().maximize();

            beforeEach(function () {
                browser.ignoreSynchronization = true;
    
            });
        }
    
    
    };