import { Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize';
import { AccountEntries, AccountTypesEnum, EntryDirection, EntryTypesEnum, UserPaymentsCollectionsBreakDown } from 'src/backend_db/Index';


@Injectable()
export class InvoiceCollectionService {
  async generateAndSubmitInvoiceCollectionAccountingEntries(transaction: Transaction) {
    const filledInstallments = await UserPaymentsCollectionsBreakDown.getFilledInstallmentsForInvoiceCollectionEntryByDate(new Date(), transaction);

    const submittableInvoiceCollectionEntries = filledInstallments.flatMap((installment: any) => {
      return [
        {
          advanceID: installment.advanceID,
          invoiceID: installment.invoiceID,
          amount: Number((installment.totalFilledPrincipal / 100).toFixed(2)) + Number((installment.totalFilledRevenue / 100).toFixed(2)),
          entryTypeID: EntryTypesEnum['Invoice Collection'],
          entryDirection: EntryDirection.Debit,
          accountTypeID: AccountTypesEnum['Cash LMS'],
          accountingDate: installment.collectionDueDate,
          metaData: {
            userID: installment.userID,
            installmentID: installment.installmentID,
            companyID: installment.companyID,
            transferDate: installment.transferDate
          }
        },
        {
          advanceID: installment.advanceID,
          invoiceID: installment.invoiceID,
          amount: Number((installment.totalFilledPrincipal / 100).toFixed(2)) + Number((installment.totalFilledRevenue / 100).toFixed(2)),
          entryTypeID: EntryTypesEnum['Invoice Collection'],
          entryDirection: EntryDirection.Credit,
          accountTypeID: AccountTypesEnum['Accounts Receivable: Issued Invoice'],
          accountingDate: installment.collectionDueDate,
          metaData: {
            userID: installment.userID,
            installmentID: installment.installmentID,
            companyID: installment.companyID,
            transferDate: installment.transferDate
          }
        }
      ]
    });
    
    return await AccountEntries.insertAccountingEntries(submittableInvoiceCollectionEntries, transaction);
  }
}
