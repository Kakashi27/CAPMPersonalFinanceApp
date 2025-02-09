using transactionService as service from '../../srv/service';
using from '../../db/schema';

annotate service.Transactions with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'amount',
                Value : amount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'denomination_code',
                Value : denomination_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'amountTo',
                Value : amountTo,
            },
            {
                $Type : 'UI.DataField',
                Label : 'amountFrom',
                Value : amountFrom,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Amount}',
            Value : amount,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Denomination}',
            Value : denomination_code,
        },
        {
            $Type : 'UI.DataField',
            Value : transactionType_ID,
            Label : '{i18n>TransactionType}',
            Criticality : transactionType.criticality,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>AmountFrom}',
            Value : amountFrom,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>AmountTo}',
            Value : amountTo,
        },
    ],
    UI.SelectionFields : [
        transactionType_ID,
        denomination_code,
    ],
);

annotate service.Transactions with {
    transactionType @(
        Common.Label : '{i18n>TransactionType}',
        Common.ValueListWithFixedValues : true,
        Common.Text : {
            $value : transactionType.name,
            ![@UI.TextArrangement] : #TextOnly
        },
    )
};

annotate service.TransactionTypeList with {
    ID @Common.Text : {
        $value : name,
        ![@UI.TextArrangement] : #TextOnly,
    }
};

annotate service.Transactions with {
    denomination @(
        Common.Label : '{i18n>Currency}',
        Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'currencies',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : denomination_ID,
                    ValueListProperty : 'code',
                },
            ],
        },
        Common.ValueListWithFixedValues : true,
        Common.Text : {
            $value : denomination.symbol,
            ![@UI.TextArrangement] : #TextFirst
        },
    )
};

annotate service.currencies with {
    code @Common.Text : {
        $value : symbol,
        ![@UI.TextArrangement] : #TextFirst,
    }
};

