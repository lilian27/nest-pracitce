import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { CommonModule } from '../common/common.module';



@Module({
  imports: [CommonModule],
  providers: [ CharacterService],
  controllers: [CharacterController]
})
export class CharacterModule {}
