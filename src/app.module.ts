import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceIssuanceModule } from './invoice-issuance/invoice-issuance.module';

@Module({
  imports: [InvoiceIssuanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
