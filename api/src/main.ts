import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationErrorFilter } from './middlewares/validation/validation-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true
  // }));
  // ! set Prefix version v1
  app.useGlobalFilters(new ValidationErrorFilter());
  app.setGlobalPrefix('v1');
  await app.listen(3000);
}
bootstrap();
