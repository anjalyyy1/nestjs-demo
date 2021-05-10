import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

// db connection
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://Anjali:TnD5shzMNqbizMDs@librarydb.2qvbe.mongodb.net/nestjsdemo?retryWrites=true&w=majority',
    ),
  ], // if we want to use some other modules, (links modules together)
  controllers: [AppController], // responsible for handling requests and returning response --> lean(no db access code here)
  providers: [AppService], // these are basically certain services/functionalities which we can use in controllers or in other providers
})

//thr can be n no of modules and we specify that this module that these controllers, these providers and depends on these modules which we define using imports

// Modules are like entities, product, user, toys
// provider goes to db to fetch the data... thn in controllers we can use tht service/provider to pass tht data as response
export class AppModule {}
