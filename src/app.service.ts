import { Injectable } from '@nestjs/common';
import {
  AdvanceStatusLog,
  AccountEntries,
  AdvancesDailyRevenue,
} from './backend_db/Index';
import { sequelize } from "./backend_db/Models/InitConnection";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async insertLoanIssuance() {
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
