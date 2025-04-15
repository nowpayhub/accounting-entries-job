import { Injectable } from '@nestjs/common';
import { AdvanceStatusLog, AccountEntries } from './backend_db/Index';
import { sequelize } from "./backend_db/Models/InitConnection";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async insertLoanIssuanceAccountEntries() {
    await sequelize.transaction(async (t) => {
      const advances = await AdvanceStatusLog.getTodayTransferredAdvances(t);

      console.log({advances});

      await Promise.all(advances.map(advance => {
        const totalRevenue = Number(advance.revenue) + Number(advance.processingFees);
        const totalRevenueWithoutVAT = Number((totalRevenue / 1.15).toFixed(2));
        advance.totalRevenueWithoutVAT = totalRevenueWithoutVAT;
        return AccountEntries.insertLoanIssuance(advance, t);
      }));
    });
  }
}
