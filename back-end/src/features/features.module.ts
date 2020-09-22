import { Module } from '@nestjs/common';
import { FeaturesController } from './features.controller';
import { FeaturesService } from './features.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { FeatureRepository } from './features.repository';
import { SubfeaturesService } from './subfeatures/subfeatures.service';
import { SubFeatureRepository } from './subfeatures/feature.repository';
import { SubsubfeaturesService } from './subsubfeatures/subsubfeatures.service';
import { SubSubFeatureRepository } from './subsubfeatures/subsubfeatures.repository';
import { SubfeaturesController } from './subfeatures/subfeatures.controller';
import { SubsubfeaturesController } from './subsubfeatures/subsubfeatures.controller';



@Module({
  imports:[
    TypeOrmModule.forFeature([FeatureRepository, SubFeatureRepository, SubSubFeatureRepository]),
    AuthModule
  ],
  controllers: [FeaturesController, SubfeaturesController, SubsubfeaturesController],
  providers: [FeaturesService, SubfeaturesService, SubsubfeaturesService]
})
export class FeaturesModule {}
