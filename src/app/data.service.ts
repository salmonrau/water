import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let produtDetails = [{
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
    },{
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
    }]
 
    return {produtDetails};
 
   }
}
