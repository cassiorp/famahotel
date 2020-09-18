import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { AnnotationsModule } from './annotations/annotations.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    AnnotationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
