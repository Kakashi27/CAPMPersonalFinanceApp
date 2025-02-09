sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'personalfianance/myapplication/test/integration/FirstJourney',
		'personalfianance/myapplication/test/integration/pages/List',
		'personalfianance/myapplication/test/integration/pages/ObjectPage'
    ],
    function(JourneyRunner, opaJourney, List, ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('personalfianance/myapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheList: List,
					onTheObjectPage: ObjectPage
                }
            },
            opaJourney.run
        );
    }
);