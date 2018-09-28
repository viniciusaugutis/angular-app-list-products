import { MarketService } from './../api/market.service';
import { ProductService } from './../api/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackService } from '../api/stack.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductService,
    StackService,
    MarketService
  ]
})
export class CoreModule { }
