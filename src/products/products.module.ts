import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
import { ProductSchema } from './product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ], // 1) we set up a mongoose model with the help of a mongoose module, 2) we can inject many models in this produle module using MongooseModule
  controllers: [ProductsController],
  providers: [ProductService],
})

// nest js does not automatically scan all your files and make guesses, thr4 we need to link this in app module
export class ProductModule {}
