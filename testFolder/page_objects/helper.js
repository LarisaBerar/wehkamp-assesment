var helperVariables = function() {

    const SHORT_WAIT_TIME = 5000;
    this.EC = protractor.ExpectedConditions;


    this.waitForTextToBeFoundInElement = function (element, text) {
        return browser.driver.wait(
            this.EC.textToBePresentInElement(element, text),
            SHORT_WAIT_TIME,
            'Timeout after waiting for ' + SHORT_WAIT_TIME + 'ms for text "' + text + '" in element (' + element + ') to exist (helper.waitForTextToBeFoundInElement)');
    };
                    
    };
    
    module.exports = new helperVariables();