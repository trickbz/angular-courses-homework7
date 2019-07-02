import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IProduct from '../mocks/IProduct';
import productsMockData from '../mocks/productsMockData';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public get productsStream(): Observable<IProduct[]> {
    return of(productsMockData).pipe(
      delay(500)
    );
  }
}
