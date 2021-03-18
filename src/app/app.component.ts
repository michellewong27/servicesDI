import { Component } from '@angular/core';
import {ProductService} from 'src/app/product-service/product.service'
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services And DI';
  products!: Product[];
  productService: any;

  constructor(){
    //creating variable for new instance of Product Service
    this.productService = new ProductService;
  }
  getProductList(){
    //setting variable products, from what's returned from the instance of ProductService's function-> getProducts
    this.products = this.productService.getProducts();
  }
}
