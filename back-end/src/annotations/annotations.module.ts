import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AnnotationsRepository } from './annotations.repository';
import { AnnotationsController } from './annotations.controller';

import { AnnotationsService } from './annotations.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([AnnotationsRepository]),
    AuthModule
  ],
  controllers: [AnnotationsController],
  providers: [AnnotationsService]
})
export class AnnotationsModule {}
