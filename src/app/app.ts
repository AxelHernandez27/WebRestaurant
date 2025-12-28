import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  
  protected readonly title = signal('WebRestaurant');

   ngOnInit() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
      }, 500);
    });
  }


  constructor(public cart: Cart) {}
  get totalItems(): number {
    return this.cart.getCart().reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
