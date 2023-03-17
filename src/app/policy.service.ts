import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  
  public getProdutDetails(){ 
    return this.httpClient.get(this.SERVER_URL + 'produtDetails');
  }
  public updateProdutDetails(product: any){
    return this.httpClient.put(`${this.SERVER_URL + 'produtDetails'}/${product.id}`, product)
  }

}
