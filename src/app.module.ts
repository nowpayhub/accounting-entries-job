import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceIssuanceModule } from './invoice-issuance/invoice-issuance.module';
import { InvoiceCollectionModule } from './invoice-collection/invoice-collection.module';

@Module({
  imports: [InvoiceIssuanceModule, InvoiceCollectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
