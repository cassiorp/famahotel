import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '172.20.0.2',
    port: 3306,
    username: 'root',
    password: 'senha123',
    database: 'famahotel',
    autoLoadEntities: true,
    //synchronize: false
}