import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
productos: Product[] = [
    {
      id: 1,
      name: 'Combo hamburguesitas',
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      name: 'Hamburguesita',
      price: 20,
      quantity: 1
    },
    {
      id: 3,
      name: 'Papas Fritas Grandes',
      price: 25,
      quantity: 1
    },
    {
      id: 4,
      name: 'Hot Dog Especial',
      price: 20,
      quantity: 1
    },
    {
      id: 5,
      name: 'Pastel de Chocolate',
      price: 20,
      quantity: 1
    },
    {
      id: 6,
      name: 'Cheesecake de Fresa',
      price: 15,
      quantity: 1
    }
  ];

  constructor(private cart: Cart) {}

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }

}
