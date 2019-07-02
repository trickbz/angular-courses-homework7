import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductDetailsComponent}
    ]),
    MatButtonModule
  ]
})
export class ProductsDetailsModule { }
