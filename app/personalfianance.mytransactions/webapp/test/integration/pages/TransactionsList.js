sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'personalfianance.mytransactions',
            componentId: 'TransactionsList',
            contextPath: '/Transactions'
        },
        CustomPageDefinitions
    );
});