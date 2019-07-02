import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import IProduct from '../../mocks/IProduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  private activatedRouteSub: Subscription;
  private products: IProduct[];
  private productsStream: Observable<IProduct[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRouteSub = this.activatedRoute.data.subscribe((data) => {
      const { products } = data;
      this.products = products;
    });
    this.productsStream = this.productsService.productsStream;
  }

  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();

  }
}
