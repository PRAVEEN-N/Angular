import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  product = {
    id: 1,
    name: 'Samsung Galaxy S10',
    price: 7000,
    description: 'A smart phone from Samsung',
    stock: 5,
    discount: 10,
  }
  cartCount:number = 0;
  name= 'John Doe'
  getDiscountedPrice() {
    return (this.product.price - (this.product.price  * this.product.discount / 100)).toFixed(2);
  }
  onChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
  incrementCartCount() {
    if(this.cartCount < this.product.stock) {
      this.cartCount++;
    }
  }
  decrementCartCount() {
    if(this.cartCount > 0) {
      this.cartCount--;
    }
  }
  searchString:string = "";
  onSearchProducttext(text: string) {
    this.searchString = text;
  }

  // @ViewChild('productListComponent') // we can use this syntax as well
  @ViewChild(ProductListComponent) // we can use this syntax as well, it is more explicit and recommended way to use ViewChild decorator in Angular
  productListComponent: ProductListComponent;
}
