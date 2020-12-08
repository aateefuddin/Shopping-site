import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartData:any[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCartProducts().subscribe(res => this.cartData = res);
  }

}
