sap.ui.define([
    "sap/m/Dialog",
], function (Dialog) {
    'use strict';

    return {
        getBalance: async function() {
            var oModel = this.getModel();
            var sBalance = "";
            var functionBindingContext = oModel.bindContext("/getUserBalance(...)");
            await functionBindingContext.execute().then(function() {
                var functionContext = functionBindingContext.getBoundContext();
                sBalance = functionContext.getObject().value;
                console.log(functionContext.getObject().value);
            }.bind(this));


            if(!this.oDialog2){
                this.oDialog2 = new Dialog({
                    title: "Account Balance",
                    content: [
                        new sap.m.MessageStrip({
                            text: `Your Balance is ${sBalance}`,
                            
                        })
                    ],
                    endButton: new sap.m.Button({
                        text: "Close",
                        press: function() {
                            this.oDialog2.close();
                        }.bind(this)
                    })
                });
            }
            this.oDialog2.open();

        },
    };
});
