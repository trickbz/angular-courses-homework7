import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import {MatCardModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductsListComponent}
    ]),
    MatListModule,
    MatCardModule
  ]
})
export class ProductsListModule { }
