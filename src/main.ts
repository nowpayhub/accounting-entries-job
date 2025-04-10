import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBConnection } from "./Config/DBConnection";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await DBConnection.getInstance();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
