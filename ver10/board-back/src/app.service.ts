import { Injectable } from '@nestjs/common';

// 스프링에서 service 역할 수행
// 비즈니스 로직 담당, 실제 개발 로직은 service에서 진행함
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
