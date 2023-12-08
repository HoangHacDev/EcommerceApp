import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { formatErrors } from './middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: formatErrors
  }));
  // ! set Prefix version v1
  app.setGlobalPrefix('v1');
  await app.listen(3000);
}
bootstrap();
