import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  private cart: Product[] = [];
  private storageKey = 'cart_items';

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.cart = JSON.parse(data);
    }
  }

  private saveCart() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }

  getCart(): Product[] {
    return this.cart;
  }

  addProduct(product: Product) {
    const item = this.cart.find(p => p.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }

  removeProduct(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
    this.saveCart();
  }

  increaseQuantity(id: number) {
    const item = this.cart.find(p => p.id === id);
    if (item) item.quantity++;
    this.saveCart();
  }

  decreaseQuantity(id: number) {
    const item = this.cart.find(p => p.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
    this.saveCart();
  }

  getTotal(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem(this.storageKey);
  }
}
