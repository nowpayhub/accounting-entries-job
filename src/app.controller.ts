import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private i = 1;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log({"message": `Hello World No.${this.i++}`});
    return this.appService.getHello();
  }
}
