import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductSummary } from '../core/model';
import { environment } from './../../environments/environment';

@Injectable()
export class ProductService {

  productsUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  filter(filter: any): Observable<any> {

    let params = new HttpParams();

    if (filter.targetMarket) {
      params = params.append('targetMarket', filter.targetMarket);
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
    }) as Observable<any>;

  }

}

