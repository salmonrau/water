import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { PolicyService } from '../policy.service';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  constructor(private productService: PolicyService) { }

  @Input() productDetails: ProductDetails[] = [];

  ngOnInit() {
    console.log('productDetails in card', this.productDetails)
  }
  changeButtonStatus(product: ProductDetails, productDetails: ProductDetails[]) {
    if(product.buttonStatus === 'BUY') {
      product.buttonStatus = 'CANCEL'
      this.productService.updateProdutDetails(product).subscribe(details => {
      })
    } else {
      product.buttonStatus = 'BUY'
        this.productService.updateProdutDetails(product).subscribe(details => {
      })
    }
  }
}
