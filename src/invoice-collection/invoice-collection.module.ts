import { Module } from '@nestjs/common';
import { InvoiceCollectionService } from './invoice-collection.service';

@Module({
  providers: [InvoiceCollectionService],
  exports: [InvoiceCollectionService]
})
export class InvoiceCollectionModule {}
