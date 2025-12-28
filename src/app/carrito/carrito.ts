import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../services/cart';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
 phone = '524771595808'; // tu número con código país

  constructor(public cart: Cart) {}

  sendWhatsApp() {
  const items = this.cart.getCart();
  if (items.length === 0) return;

  let message = `*Pedido*\n\n`;

  items.forEach(item => {
    message += `• ${item.name}\n`;
    message += `  Cantidad: ${item.quantity}\n`;
    message += `  Subtotal: $${item.price * item.quantity}\n\n`;
  });

  message += `*Total:* $${this.cart.getTotal()}`;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${this.phone}?text=${encodedMessage}`,
    '_blank'
  );
  
  this.cart.clearCart();
}

}
