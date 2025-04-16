import { Injectable } from '@nestjs/common';
import {
  AdvanceStatusLog,
  AccountEntries,
  AdvancesDailyRevenue,
} from './backend_db/Index';
import { sequelize } from "./backend_db/Models/InitConnection";
import { InvoiceIssuanceService } from './invoice-issuance/invoice-issuance.service';

@Injectable()
export class AppService {
  constructor(private readonly invoiceIssuanceService: InvoiceIssuanceService) {}

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
      
    });
  }

  async insertDailyRevenue() {
    await sequelize.transaction(async (t) => {
      const dailyRevenueRecords = await AdvancesDailyRevenue.getTodayTransferredDailyRevenues(t);
      console.log({dailyRevenueRecords});

      await Promise.all(dailyRevenueRecords.map(async (dailyRevenue) => {
        return AccountEntries.insertDailyRevenue(dailyRevenue, t);
      }));
    })
  }
}
