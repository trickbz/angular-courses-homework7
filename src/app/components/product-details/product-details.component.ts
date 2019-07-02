import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import IProduct from '../../mocks/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private activatedRouteSub: Subscription;
  private product: IProduct;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouteSub = this.activatedRoute.data.subscribe((data) => {
      const { product } = data;
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
  }

}
