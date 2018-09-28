import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ListProductsComponent],
  exports: [ListProductsComponent]
})
export class PagesModule { }
