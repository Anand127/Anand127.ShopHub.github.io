import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService, public cartService: CartService, private router: Router ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.categories = Array.from(new Set(products.map(product => product.category)));
    });
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('Added to cart:', product.name);
  }
  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}
