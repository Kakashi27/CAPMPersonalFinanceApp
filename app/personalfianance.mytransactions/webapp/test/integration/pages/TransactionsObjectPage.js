sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'personalfianance.mytransactions',
            componentId: 'TransactionsObjectPage',
            contextPath: '/Transactions'
        },
        CustomPageDefinitions
    );
});