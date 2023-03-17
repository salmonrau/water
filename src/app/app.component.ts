import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetails } from './product-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waters';
  productDetails: ProductDetails[] = [];
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.router.navigateByUrl('/one', {state: {type: 'one'}})
  }
}
