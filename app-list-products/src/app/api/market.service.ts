import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable()
export class MarketService {

  targetMarketsUrl = `${environment.apiUrl}/target_markets`;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.targetMarketsUrl}`);
  }
}


