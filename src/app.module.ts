import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { HelloRepository } from './hello.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig),
  TypeOrmModule.forFeature([HelloRepository])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
