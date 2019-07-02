import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    MatButtonModule,
    MatCardModule
  ]
})
export class HomeModule { }
