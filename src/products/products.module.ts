import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
})

// nest js does not automatically scan all your files and make guesses, thr4 we need to link this in app module
export class ProductModule {}
