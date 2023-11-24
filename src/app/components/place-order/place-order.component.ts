import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart Items:', this.cartItems);
  }

  calculateCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0);
  }
  
}
