import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board/entities/board.entity';

// 애플리케이션 루트 모듈, 각 모듀들은 이 파일에 import 함
@Module({
  imports: [
    ConfigModule.forRoot(), // config 모듈을 통한 process.env 객체 사용
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.NESTJS_PRAC1,
      entities: [Board], // Board entity 사용하기 위해 추가
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Board entity 사용하기 위해 추가
      synchronize: true, // 배포 환경에서는 false 사용
    }),
    BoardModule,
  ],
})
export class AppModule {}
