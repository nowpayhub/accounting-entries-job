import { Injectable } from '@nestjs/common';
import { Installment, AccountEntries } from '../backend_db/Index';
import { Transaction } from 'sequelize';
import { EntryTypesEnum, AccountTypesEnum, AccountingEntryType, EntryDirection } from '../backend_db/Index';


@Injectable()
export class InvoiceIssuanceService {
  async generateInvoiceIssuanceAccountingEntries() {
    try {
      const installments:any = await Installment.getTodayInstallmentsForInvoiceIssuance() ;
      
      // Transform installments into accounting entries
      const invoiceIssuanceEntries: AccountingEntryType[] = [];
      
      for (const installment of installments) {
        // Add entries for principal
        
        invoiceIssuanceEntries.push(
          {
            advanceID: installment.advanceID,
            entryTypeID: EntryTypesEnum['Invoice Issuance'],
            amount: Number(Number(installment.principalBeforeDiscount).toFixed(2)),
            entryDirection: EntryDirection.Debit,
            accountTypeID: AccountTypesEnum['AR Invoice Issued Principal'],
            metaData : {userID:installment['Advance.userID'] , companyID:installment.companyID}
          },
          {
            advanceID: installment.advanceID,
            entryTypeID: EntryTypesEnum['Invoice Issuance'],
            amount: Number(Number(installment.principalBeforeDiscount).toFixed(2)),
            entryDirection: EntryDirection.Credit,
            accountTypeID: AccountTypesEnum['AR: SA Principal'],
            metaData : {userID:installment['Advance.userID'] , companyID:installment.companyID}
          }
        );

        // Add entries for revenueWithoutVAT
        invoiceIssuanceEntries.push(
          {
            advanceID: installment.advanceID,
            entryTypeID: EntryTypesEnum['Invoice Issuance'],
            amount: Number(Number(installment.revenueWithoutVAT).toFixed(2)),
            entryDirection: EntryDirection.Debit,
            accountTypeID: AccountTypesEnum['AR Invoice Issued Revenue'],
            metaData : {userID:installment['Advance.userID'] , companyID:installment.companyID}
          },
          {
            advanceID: installment.advanceID,
            entryTypeID: EntryTypesEnum['Invoice Issuance'],
            amount: Number(Number(installment.revenueWithoutVAT).toFixed(2)),
            entryDirection: EntryDirection.Credit,
            accountTypeID: AccountTypesEnum['AR: SA Revenue'],
            metaData : {userID:installment['Advance.userID'] , companyID:installment.companyID}
          }
        );

        // Add entries for VAT
        invoiceIssuanceEntries.push(
          {
            advanceID: installment.advanceID,
            entryTypeID: EntryTypesEnum['Invoice Issuance'],
            amount: Number(Number(installment.VAT).toFixed(2)),
            entryDirection: EntryDirection.Debit,
            accountTypeID: AccountTypesEnum['AR Invoice Issued VAT'],
            metaData : {userID:installment['Advance.userID'] , companyID:installment.companyID}
          },
          {
            advanceID: installment.advanceID,
            entryTypeID: EntryTypesEnum['Invoice Issuance'],
            amount: Number(Number(installment.VAT).toFixed(2)),
            entryDirection: EntryDirection.Credit,
            accountTypeID: AccountTypesEnum['VAT'],
            metaData : {userID:installment['Advance.userID'] , companyID:installment.companyID}
          }
        );
        
      }
      
      return {
        invoiceIssuanceEntries
      };
    } catch (error) {
      throw new Error(`Failed to fetch today's installments: ${error.message}`);
    }
  }

  async submitInvoiceIssuanceAccountingEntries(transaction?: Transaction) {
    const { invoiceIssuanceEntries } = await this.generateInvoiceIssuanceAccountingEntries();
    console.log('Submitting invoice issuance entries:', { count: invoiceIssuanceEntries.length });
    return await AccountEntries.insertAccountingEntries(invoiceIssuanceEntries, transaction);
  }
}
