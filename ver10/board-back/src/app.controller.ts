import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 데코레이터로 선언하여 지정 가능, spring에서는 애노테이션과 유사!!
// 요청과 응답 처리 역할 수행
// @Controller('/경로') 로 첫 번재 인자값 설정 가능
// @Get, @Post 로 restful api 수행 가능
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
