import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [CharacterModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
