import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  produtDetails: ProductDetails[] = [];

  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    if(history.state.type === 'one') {
      this.produtDetails = [{
        productType: 'STARTER',
        productDescription: 'Starter Feature for your business grow.',
        price: '$1',
        color:'grey',
        buttonStatus:'BUY',
        disable:false
      },{
        productType: 'REGULAR',
        productDescription: 'Regular Feature for your business grow.',
        price: '$25',
        color:'blue',
        buttonStatus:'BUY',
        disable:false
      }]
    } 
    else {
      this.produtDetails = [
        {
          productType: 'PROFESSIONAL',
          productDescription: 'Professional Feature for your business grow.',
          price: '$75',
          color:'purple',
          buttonStatus:'BUY',
          disable:false
        },{
          productType: 'ULTIMATE',
          productDescription: 'The Ultimate Feature for your business grow.',
          price: '$115',
          color:'red',
          buttonStatus:'BUY',
          disable:false
        }
      ];
    }
  }

}
