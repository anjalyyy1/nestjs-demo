import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {} // we use accessor so that this productService is stored in an equally named property

  @Post()
  addProducts(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const newProductId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    // if we just return id, content type header wld be text/html, thr4 we return json
    return {
      id: newProductId,
    };
  }

  @Get()
  getAllProducts() {
    return { products: this.productService.fetchProducts() };
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return { products: this.productService.fetchSingleProduct(prodId) };
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    //call service
  }

  @Delete(':id')
  removeProduct() {
    // remove product
  }
}

/*
    @Body -> gives us the body, parses it 
    @Body('title') prodTitle: string ---> individual props
    @Body() completeBody: {title: string, desc: string,....}
*/
