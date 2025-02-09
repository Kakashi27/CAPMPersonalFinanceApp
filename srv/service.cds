using {finance as my} from '../db/schema.cds';

@path: '/service/transactionService'
service transactionService {
    @odata.draft.enabled
    entity Transactions as projection on my.Transactions;

    function getUserBalance() returns Decimal(10,2);
}

annotate transactionService with @requires: ['authenticated-user'];
