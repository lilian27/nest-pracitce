import { Injectable } from '@nestjs/common';
import { Characteres } from './interfaces/characteres-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class CharacterService {
    constructor( private readonly http: AxiosAdapter){}

    public async apiFindAll( paginationDto: PaginationDto){

        try {
            const response = await this.http.get<Characteres>('https://rickandmortyapi.com/api/character', paginationDto);

            return response.results
        } catch (error) {
            console.log('error', error);
        }
    }
}
