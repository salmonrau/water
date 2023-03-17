import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let produtDetails = [
      {
        id: 1,
        productType: 'STARTER',
        productDescription: 'Starter Feature for your business grow.',
        price: '$1',
        color: 'grey',
        buttonStatus: 'BUY',
        disable: false
      }, {
        id: 2,
        productType: 'REGULAR',
        productDescription: 'Regular Feature for your business grow.',
        price: '$25',
        color: 'blue',
        buttonStatus: 'BUY',
        disable: false
      }, {
        id: 3,
        productType: 'PROFESSIONAL',
        productDescription: 'Professional Feature for your business grow.',
        price: '$75',
        color: 'purple',
        buttonStatus: 'BUY',
        disable: false
      }, {
        id: 4,
        productType: 'ULTIMATE',
        productDescription: 'The Ultimate Feature for your business grow.',
        price: '$115',
        color: 'red',
        buttonStatus: 'BUY',
        disable: false
      }]

    return { produtDetails };

  }
}
