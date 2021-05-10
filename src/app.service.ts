import { Injectable } from '@nestjs/common';

// all the heavy lifting tasks go here
@Injectable() // to make sure this is injectable
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
