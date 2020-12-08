import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any[] = [];
  totalPrice:number = 0;
  placed :string=" ";
  

  constructor(
    private sharedService: SharedService,
    private changeRef: ChangeDetectorRef
    ) {
      this.sharedService.getCartProducts().subscribe(res => {
      
        this.cartData = JSON.parse(JSON.stringify(res));
        this.getTotalPrice();
      });
     }

  ngOnInit(): void {

  }

  updateQuantity(operation, item, index) {
    switch (operation) {
      case 'increase':
          item['quantity'] += 1;
          this.sharedService.updateCartData(item , index);
        break;
      case 'decrease':
        if(item['quantity'] == 1)
        {
          console.log(item);
          
          return;
        } 
        console.log(item);
        
        item['quantity'] -= 1;
        this.sharedService.removeCartData(item , index);
        break;
    }
  }

  getTotalPrice() {
    this.totalPrice = 0;
      this.cartData.forEach(res => {
        this.totalPrice += (res.price * res.quantity);
        // this.totalPrice = this.totalPrice+(res.price*res.quantity) ;
      });
  }
  

  addCoupon(Coupon: string) {
    if (Coupon=='TEST50') { 
      this.totalPrice = this.totalPrice - (this.totalPrice*0.50);
    }
  }
 EmptyOrNot : boolean;
  orderPlaced(){
    if(this.totalPrice==0){
     // alert("Your Cart is Empty");
      this.EmptyOrNot = true;
    }
    else{
    //alert("Thank You for placing order");
    this.EmptyOrNot = false;
    }
  }

}
