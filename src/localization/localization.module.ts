// localization.module.ts

import { Module } from '@nestjs/common';
import { LocalizationService } from './localization.service'; // Update the path to localization service
import { MessageModule } from 'src/chat/message.module';

@Module({
  imports: [MessageModule],
  providers: [LocalizationService],
  exports: [LocalizationService],
})
export class LocalizationModule {}
