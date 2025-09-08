import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import morgan from "morgan";
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  app.use(morgan('dev'));
  app.enableCors(CORS);
  app.setGlobalPrefix('api'); //global prefix para los endpoints

  await app.listen(configService.get('PORT') || 3000);

  console.log(`Application running on : ${await app.getUrl()}`)
}
bootstrap();
