import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';

console.log('hello world');
@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
