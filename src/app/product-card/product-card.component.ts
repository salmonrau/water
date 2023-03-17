import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
//status: string='BUY'
  constructor() { }

  @Input() productDetails: ProductDetails[] = [];

  ngOnInit() {
    console.log('productDetails in card', this.productDetails)
  }
  buy(productInfo: any){
    console.log(productInfo);
    //this.status= this.status==='CANCEL'?'BUY':'CANCEL';
    this.productDetails.forEach(element=>{
      if(element.productType==productInfo){
        if(element.buttonStatus=='BUY'){
          element.buttonStatus='CANCEL'
        }else {
          element.buttonStatus='BUY'
        }

      }
    }
  )}

}
