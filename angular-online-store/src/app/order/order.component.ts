import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  shipping;
  total: number;
  name: string;
  address: string;
  items;
  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.address = this.cartService.getClientAddress();
    this.name = this.cartService.getClientName();
    this.items = this.cartService.getItems();
    this.shipping = this.cartService.getShipping();
    this.total = this.cartService.sum();

  }
  clear(): void {
    this.cartService.setClientName('');
    this.cartService.setClientAddress('');
    this.cartService.clearCart();
    this.cartService.changeShipping({ type: "Select", price: 0 });
    this.router.navigateByUrl('/');
  }
}
