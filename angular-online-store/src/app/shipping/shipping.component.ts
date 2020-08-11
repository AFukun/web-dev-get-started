import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { Location } from '@angular/common'
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippings;
  constructor(
    private cartService: CartService,
    private location: Location) {

  }
  changeShipping(shipping) {
    this.cartService.changeShipping(shipping);
    this.location.back();
    //alert(this.cartService.getShipping().type);

  }
  alert(shipping) {
    window.alert(shipping.type);

  }

  ngOnInit(): void {
    this.shippings = this.cartService.getShippingPrices();
  }

}
