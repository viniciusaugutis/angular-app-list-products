import { Component, OnInit } from '@angular/core';

import { MarketService } from '../../api/market.service';
import { ProductService } from './../../api/product.service';
import { StackService } from './../../api/stack.service';
import { ProductFilter, ProductSummary } from './../../core/model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public productFilter = new ProductFilter();
  public stackOptions;
  public marketOptions;
  public listProducts;
  public targetMarketsSelected;
  public stacksSelected;

  constructor(
    public productService: ProductService,
    public stackService: StackService,
    public marketService: MarketService
  ) { }

  ngOnInit() {

    this.stackService.findAll()
      .subscribe(response => {
        this.stackOptions = response.content
          .map(aux => ({ label: aux.name, value: aux.id.toString() }));
      });

    this.marketService.findAll()
      .subscribe(response => {
        this.marketOptions = response.content
          .map(aux => ({ label: aux.name, value: aux.id.toString() }));
      });
  }

  public searchProducts(): void {
    this.productFilter.stack = this.stacksSelected && this.stacksSelected[0] ?
      this.stacksSelected.map(aux => (aux.value)) : null;
    this.productFilter.targetMarket = this.targetMarketsSelected && this.targetMarketsSelected[0] ?
      this.targetMarketsSelected.map(aux => (aux.value)) : null;

    this.productService.filter(this.productFilter).subscribe(response => {
      this.listProducts = response.content;
    });
  }
}
