import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

// all the heavy lifting tasks go here
@Injectable() // to make sure this is injectable
export class ProductService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
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
