import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

// all the heavy lifting tasks go here
@Injectable() // to make sure this is injectable
export class ProductService {
  private products: Product[] = [];

  // to import a model which we have injected InjectModel
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({ title, description, price });
    const response = await newProduct.save();
    console.log(response, '--');
    return response.id;
  }

  fetchProducts() {
    return [...this.products];
  }

  fetchSingleProduct(id: string) {
    const product = this.products.find((eachProduct) => eachProduct.id === id);
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return { ...product };
  }

  updateProduct(productId: string, title: string, description: string) {
    // update the product
    return {};
  }
}
