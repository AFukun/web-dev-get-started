import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class CartService {
  constructor(private http: HttpClient) { }
  /*item*/
  items = [
  ];
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  sum(): number {
    let total = 0;
    for (let i = 0; i < this.items.length; i++)
      total += this.items[i].price;
    return total + this.shipping.price;
  }

  /*shipping*/
  shipping = { type: "Select", price: 0 };
  changeShipping(shipping) {
    this.shipping = shipping;
  }
  getShipping() {
    return this.shipping;


  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  /*form*/
  clientName: string;
  clientAddress: string;
  setClientName(name: string) {
    this.clientName = name;
  }
  setClientAddress(address: string) {
    this.clientAddress = address;
  }

  getClientName() {
    return this.clientName;
  }
  getClientAddress() {
    return this.clientAddress;
  }
}
