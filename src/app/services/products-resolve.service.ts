import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import IProduct from '../mocks/IProduct';
import { map } from 'rxjs/operators';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolveService implements Resolve<IProduct> {

  constructor(private productsService: ProductsService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productsService.productsStream.pipe(
      map((products: IProduct[]) => {
        return products.filter((product: IProduct ) => {
          return route.params.id === product.id.toString();
        })[0];
      })
    );
  }
}
