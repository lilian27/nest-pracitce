import { Test, TestingModule } from '@nestjs/testing';
import { CharacterService } from '../../character/character.service';
import { AxiosAdapter } from '../../common/adapters/axios.adapter';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpAdapter: AxiosAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharacterService,
        {
          provide: AxiosAdapter,
          useValue: {
            get: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<CharacterService>(CharacterService);
    httpAdapter = module.get<AxiosAdapter>(AxiosAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
