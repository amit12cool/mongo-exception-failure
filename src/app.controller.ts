import { Controller, Get, Post, Body, Param, UseFilters } from '@nestjs/common';

import { MongoExceptionFilter } from './exceptionfilters/mongo-exception.filter';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':deviceId')
  @UseFilters(MongoExceptionFilter)
  createToken(@Param() deviceId: string): Promise<string> {
      return this.appService.generateToken(deviceId);
  }

}
