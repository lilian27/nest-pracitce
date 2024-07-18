import { Test, TestingModule } from '@nestjs/testing';
import { CharacterController } from '../../character/character.controller';
import { CharacterService } from '../../character/character.service';
import { AxiosAdapter } from '../../common/adapters/axios.adapter';

describe('CharacterController', () => {
  let controller: CharacterController;
  let service: CharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [
        CharacterService,
        {
          provide: AxiosAdapter,
          useValue: {
            get: jest.fn(),
          }
        }
      ]
    }).compile();

    controller = module.get<CharacterController>(CharacterController);
    service = module.get<CharacterService>(CharacterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
