import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { DBConnection } from './Config/DBConnection';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const pool = DBConnection.getInstance();
  const appService = app.get(AppService);
  await appService.getOneUser();
  pool.end();
  await app.close();
  process.exit(0);
}
bootstrap();
