import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hello } from './hello.entity';
import { HelloRepository } from './hello.repository';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(HelloRepository)
    private helloRepository: HelloRepository,
  ) { }

  async getHello(): Promise<string> {
    const id: number = 1;
    const hello: Hello = await this.helloRepository.findOne(id);
    const name: string = hello.name;
    return name
  }
}
