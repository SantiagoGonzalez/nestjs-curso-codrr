import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import morgan from "morgan";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));


  const configService = app.get(ConfigService)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
