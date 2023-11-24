import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }
  navigateToDashboard(): void {
    this.router.navigate(['/products']);
  }

  increaseQuantity(index: number): void {
    this.cartService.increaseQuantity(index);
    this.updateTotalPrice();
  }
  
  decreaseQuantity(index: number): void {
    this.cartService.decreaseQuantity(index);
    this.updateTotalPrice();
  }
  
  private updateTotalPrice(): void {
    this.cartItems.forEach(item => {
      item.totalPrice = item.quantity * item.price;
    });
  }
  placeOrder(): void {
    // Perform any order processing or clearing of the cart
    //this.cartService.clearCart(); // Assuming you have a clearCart method in the CartService
    this.router.navigate(['/place-order']); // Navigate to the "Place Order" page
  }
}
