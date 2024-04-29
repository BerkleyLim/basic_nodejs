import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// nest.js의 시작 점
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS 허용
  app.enableCors({
    origin: true, // 여기에 url 삽입 가능
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
