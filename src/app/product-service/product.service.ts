import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  public getProducts(){
  let products: Product[];
  products=[
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pan Drive', 750),
    new Product(3, 'Power Bank', 100)
  ]
  return products;
  }
}
