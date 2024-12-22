import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    id: 1,
    name: 'Samsung Galaxy S10',
    price: 7000,
    description: 'A smart phone from Samsung',
    stock: 0,
    discount: 10,
  }
  name= 'John Doe'
  getDiscountedPrice() {
    return (this.product.price - (this.product.price  * this.product.discount / 100)).toFixed(2);
  }
  onChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
}
