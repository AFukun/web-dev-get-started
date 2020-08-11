import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'
import { Location } from '@angular/common'
import { Router } from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items;
  checkoutForm;
  total: number;
  shipping;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({ name: '', address: '' });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.sum();
    this.shipping = this.cartService.getShipping();
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(checkoutForm) {

    this.cartService.setClientName(this.checkoutForm.get("name").value);
    this.cartService.setClientAddress(this.checkoutForm.get("address").value);

    this.checkoutForm.reset();

    this.router.navigateByUrl('/order');
    //alert();
  }

}
