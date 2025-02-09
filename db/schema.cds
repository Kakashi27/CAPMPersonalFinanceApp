namespace finance;

using
{
    sap.common.Currencies,
    sap.common.CodeList,
    cuid,
    managed,
}
from '@sap/cds/common';

entity Transactions : cuid, managed
{
    key ID : UUID;
    transactionType : Association to one TransactionTypeList;
    amount : Integer;
    denomination : Association to one currencies;
    amountTo : String(100);
    amountFrom : String(100);
}

entity currencies : cuid, Currencies
{
}

entity TransactionTypeList : CodeList
{
    key ID : UUID;
    code : TransactionTypeEnum;
    criticality : Integer;
}

type TransactionTypeEnum : String enum
{
    C = 'Credit';
    D = 'Debit';
}
