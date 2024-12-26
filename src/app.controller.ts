import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers('X-Name') name: string): string {
    console.log(name, 'name');
    console.log('Hello World!', 3001);
    return this.appService.getHello();
  }
}
