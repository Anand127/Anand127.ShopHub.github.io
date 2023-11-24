import { Injectable } from '@angular/core';
import { Product } from './product.model';
export interface ProductLocal  {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  quantity: number;
totalPrice?: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: Product[] = [];

  // addToCart(product: Product): void {
  //   this.cartItems.push(product);
  // }

  // addToCart(product: Product): void {
  //   const existingItem = this.cartItems.find(item => item.id === product.id);
  //   if (existingItem) {
  //     existingItem.quantity++;
  //     existingItem.totalPrice = existingItem.quantity * existingItem.price; // Calculate total price
  //   } else {
  //     this.cartItems.push({ ...product, quantity: 1, totalPrice: product.price });
  //   }
  // }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.price; // Initialize totalPrice
    } else {
      this.cartItems.push({ ...product, quantity: 1, totalPrice: product.price }); // Initialize totalPrice
    }
  }
  
  

  getCartItems(): Product[] {
    return this.cartItems;
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    console.log(this.cartItems);
  }
  
  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      console.log(this.cartItems);
    }
  }
  clearCart(): void {
    this.cartItems = [];
  }
  
}
