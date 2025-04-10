import { Injectable } from '@nestjs/common';
import { User } from "./backend_db/Index";
import { QueryTypes } from 'sequelize';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getOneUser() {
    return await User.findOne({ limit: 1 });
  }
}
