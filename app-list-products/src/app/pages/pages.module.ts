import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListProductsComponent],
  exports: [ListProductsComponent]
})
export class PagesModule { }
