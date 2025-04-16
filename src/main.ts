// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Caso queira habilitar CORS, logs, etc.
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
