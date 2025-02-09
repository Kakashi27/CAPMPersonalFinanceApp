const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
    const { Transactions, TransactionTypeList } = this.entities;

    // Implement the function logic
    this.on('getUserBalance', async (req) => {
        const userId  = 'Anil';

        const [creditType, debitType] = await Promise.all([
            SELECT.one('ID').from(TransactionTypeList).where({ code: 'Credit' }),
            SELECT.one('ID').from(TransactionTypeList).where({ code: 'Debit' })
        ]);

        if (!creditType || !debitType) {
            req.error(400, 'Transaction type definitions not found in the database.');
        }

        const creditTypeId = creditType.ID;
        const debitTypeId = debitType.ID;

        // Aggregate user's transactions
        const [credits, debits] = await Promise.all([
        SELECT.one(`
            SUM(amount) as totalCredit
        `)
            .from(Transactions)
            .where({ createdBy: userId, transactionType: creditTypeId }),

        SELECT.one(`
            SUM(amount) as totalDebit
        `)
            .from(Transactions)
            .where({ createdBy: userId, transactionType: debitTypeId })]);

        const totalCredit = credits?.totalCredit || 0;
        const totalDebit = debits?.totalDebit || 0;

        // Calculate balance
        const balance = totalCredit - totalDebit;
        return balance.toFixed(2);
    });
});