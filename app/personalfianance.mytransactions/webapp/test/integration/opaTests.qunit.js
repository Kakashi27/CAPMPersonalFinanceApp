sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'personalfianance/mytransactions/test/integration/FirstJourney',
		'personalfianance/mytransactions/test/integration/pages/TransactionsList',
		'personalfianance/mytransactions/test/integration/pages/TransactionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TransactionsList, TransactionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('personalfianance/mytransactions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTransactionsList: TransactionsList,
					onTheTransactionsObjectPage: TransactionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);