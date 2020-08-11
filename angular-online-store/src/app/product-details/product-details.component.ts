import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products'
import { CartService } from '../cart.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} added to the cart!`);
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }
}
