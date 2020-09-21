import { Module } from '@nestjs/common';
import { FeaturesController } from './features.controller';
import { FeaturesService } from './features.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { FeatureRepository } from './features.repository';
import { SubfeaturesController } from './subfeatures/subfeatures.controller';
import { SubfeaturesService } from './subfeatures/subfeatures.service';
import { SubFeatures } from './subfeatures/subfeature.entity';
import { SubFeatureRepository } from './subfeatures/feature.repository';


@Module({
  imports:[
    TypeOrmModule.forFeature([FeatureRepository, SubFeatureRepository]),
    AuthModule
  ],
  controllers: [FeaturesController, SubfeaturesController],
  providers: [FeaturesService, SubfeaturesService]
})
export class FeaturesModule {}
