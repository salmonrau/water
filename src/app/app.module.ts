import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClientBackendService, InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [				
    AppComponent,
    ProductCardComponent,
    ProductsListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot([
      {path: '', component: ProductsListComponent},
      {path: 'one', component: ProductsListComponent},
      {path: 'two', component: ProductsListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
