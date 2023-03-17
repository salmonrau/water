import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  produtDetails: ProductDetails[] = [];

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private productService: PolicyService) {
  }
  ngOnInit() {
    if(history.state.type === 'one') {
      this.productService.getProdutDetails().subscribe((details: any) => {
        console.log('details', details)
        this.produtDetails = details.slice(0, 2)
      })
    } 
    else {
      this.productService.getProdutDetails().subscribe((details: any) => {
        console.log('details', details)
        this.produtDetails = details.slice(2, 4)
      })
    }
  }

}
