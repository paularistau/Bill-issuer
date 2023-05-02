import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Apenas a API, nada para contemplar por aqui';
  }
}
