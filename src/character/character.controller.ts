import { Controller, Get, Query } from '@nestjs/common';
import { CharacterService } from './character.service';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService: CharacterService){}


    @Get()
    apiFindAll( @Query() paginationDto: PaginationDto ){
        console.log(paginationDto);
        return this.characterService.apiFindAll( paginationDto )
    }

}
