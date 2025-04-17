import { Injectable } from '@nestjs/common';
import { AdvanceStatusLog, AccountEntries } from './backend_db/Index';
import { sequelize } from "./backend_db/Models/InitConnection";
import { InvoiceIssuanceService } from './invoice-issuance/invoice-issuance.service';
import { InvoiceCollectionService } from './invoice-collection/invoice-collection.service';

@Injectable()
export class AppService {
  constructor(
    private readonly invoiceIssuanceService: InvoiceIssuanceService,
    private readonly invoiceCollectionService: InvoiceCollectionService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async processAccountingEntries() {
    await sequelize.transaction(async (t) => {
      // Handle loan issuance entries
      const advances = await AdvanceStatusLog.getTodayTransferredAdvances(t);
      console.log('Processing loan issuance entries:', { advances });
      
      await Promise.all(advances.map(advance => {
        const totalRevenue = Number(advance.revenue) + Number(advance.processingFees);
        const totalRevenueWithoutVAT = Number((totalRevenue / 1.15).toFixed(2));
        advance.totalRevenueWithoutVAT = totalRevenueWithoutVAT;
        return AccountEntries.insertLoanIssuance(advance, t);
      }));

      // Handle invoice issuance entries
      console.log('Start invoice issuance entries >>>>>>>>' , new Date());
      
      await this.invoiceIssuanceService.submitInvoiceIssuanceAccountingEntries(t);
      console.log('Finish invoice issuance entries >>>>>>>>' , new Date());
      
      // Handle invoice collection entries
      console.log('Start invoice collection entries >>>>>>>>' , new Date());
      await this.invoiceCollectionService.generateAndSubmitInvoiceCollectionAccountingEntries(t);
      console.log('Finish invoice collection entries >>>>>>>>' , new Date());
      
    });
  }
}
