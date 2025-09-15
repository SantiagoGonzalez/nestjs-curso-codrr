import { DataSource as TypeOrmDataSource, DataSourceOptions } from "typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

//uso el config module de Nest para que se cargue el archivo de entorno
ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
})
const configService = new ConfigService();

export const DataSourceConfig :DataSourceOptions = {
    type : 'postgres',
    host : configService.get('DB_HOST'),
    port : Number(configService.get('DB_PORT')),
    username : configService.get('DB_USER'),
    password : configService.get('DB_PASSWORD'),
    database : configService.get('DB_NAME'),
    entities : [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations : [__dirname + '/../migrations/**/*{.ts,.js}'],
    synchronize : false,
    migrationsRun : true,
    logging : false,
    namingStrategy : new SnakeNamingStrategy(),
}

export const AppDataSource = new TypeOrmDataSource(DataSourceConfig);