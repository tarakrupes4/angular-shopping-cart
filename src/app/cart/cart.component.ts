import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cartService : CartService) {}
  items = this.cartService.getItems();
}
