import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  prodcts = new BehaviorSubject<any>([
    {
      id: 1,
      name : 'pTron Bassbuds in-Ear True Wireless Bluetooth 5.0',
      price : 999 ,
      description : 'True Wireless Earbuds; Bluetooth 5.0; Stereo Sound with Bass; Voice Assistant; 10mm Dynamic Drivers; Built-in Mic.',
      imageUrl: 'https://m.media-amazon.com/images/I/41ImsZy3u5L._AC_SR160,160_.jpg'
    },
    {
      id: 2,
      name : 'Nokia 5.3 Android One Smartphone with Quad Camera',
      price : 12499 ,
      description : 'The 2-day battery testing was conducted using a real life usage test by HMD Global. ',
      imageUrl: 'https://m.media-amazon.com/images/I/41p0PLiCyeL.__AC_SY200_.jpg'
    },
    {
      id: 3,
      name : 'DENIMHOLIC Mens Cotton Turtle Neck Sweater',
      price : 949,
      description : 'FANTASTICALLY COMFORTABLE-- 100% Cotton offers optimal softness and durability. High-end knit process,do not shrink.',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/7154XQXtjWL._UL1500_.jpg'
    },
    {
      id: 4,
      name : 'Mi Notebook Horizon Edition 14 Intel Core i7-10510U',
      price : 59999,
      description : '10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AF+Webcam',
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/41zWRIfFyDL._AC_US240_FMwebp_QL65_.jpg'
    }
  ]);

  shoppingCart = new BehaviorSubject<any>([]);
  
  getAllproducts() {
    return this.prodcts.asObservable();
  }

  getCartProducts() {
    return this.shoppingCart.asObservable();
  }

  addTocart(data) {
    data['quantity'] = 1;
    let availableCartData = this.shoppingCart.value;
    availableCartData.push(data);
    this.shoppingCart.next(availableCartData);
  }

  updateCartData(data, index) {
    let availableCartData = JSON.parse(JSON.stringify(this.shoppingCart.value)) as any;
   
    availableCartData[index] = data;

    this.shoppingCart.next(availableCartData); 
  }

  removeCartData(data, index) {
    let availableCartData = this.shoppingCart.value[index];
    availableCartData.splice(index, 1);
    this.shoppingCart.next(availableCartData);
  }
}
