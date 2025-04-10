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

  @Get("/test")
  async getOneUser() {
    const user = await this.appService.getOneUser();
    return {
      statusCode: 200,
      message: "Test Data",
      user,
      no: this.i
    };
  }
}
