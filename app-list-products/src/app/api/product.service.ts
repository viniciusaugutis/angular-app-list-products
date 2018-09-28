
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductSummary } from '../core/model';


@Injectable()
export class ProductService {

  productsUrl = '/products';

  constructor(private http: HttpClient) { }

  filter(filter: any): Observable<ProductSummary> {

    let params = new HttpParams();

    if (filter.market) {
      params = params.append('market', filter.market);
    }

    if (filter.stack) {
      params = params.append('stack', filter.stack);
    }

    if (filter.page) {
      params = params.append('page', filter.page.toString());
    }

    if (filter.size) {
      params = params.append('size', filter.size.toString());
    } else {
      params = params.append('size', '20');
    }

    return this.http.get(`${this.productsUrl}`, {
      params: params
    }) as Observable<ProductSummary>;

  }

}

