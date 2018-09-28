import { ProductFilter } from './../../core/model';
import { ProductService } from './../../api/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public productFilter = new ProductFilter();
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {

    this.productFilter.targetMarket = [1];
    this.productService.filter(this.productFilter).subscribe(response => {
      console.log(response);
    });
  }

}
