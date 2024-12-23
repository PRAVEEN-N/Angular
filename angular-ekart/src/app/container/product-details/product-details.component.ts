import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input()
  productListComp: ProductListComponent = undefined;

  product: Product;
  ngOnInit() {
    console.log('sleproduct', this.productListComp.selectedProduct);
    this.product = this.productListComp.selectedProduct;
    console.log('ngOnIt', this.product);
  }
  
}
