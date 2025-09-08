import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      //esto puede configurarse en el package.json para exportar DEVELOP/PRODUCCION
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal:true
    }),
    UsersModule
  ]
})
export class AppModule {}
