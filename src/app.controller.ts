import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// we are routing requests with decorators here
// your-domain.com/controller-ka-parametr/get-ka-parameter
@Controller()
export class AppController {
  // dependency injection
  // whenever any instance is created of this class, AppService should be passed, it is nest js duty to pass it, which we specify in module
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getHello(): string {
    return this.appService.getHello();
  }
}

/* 
@Controller() --> empty controller means request to " /", so api-endpoint/
@Controller(users) --> request to /users, /users/anything


@Get() --> executed when a get request for respective "/" (Controller)
consider this get as chain

@Controller()
@Get("users") ----> /users req wld reach here  --> "/" + "users"

@Controller(/products)
@Get("users") ----> /products/users req wld reach here  --> "products" + "users"


*/
