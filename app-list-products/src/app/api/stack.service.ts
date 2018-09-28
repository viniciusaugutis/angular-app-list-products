import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable()
export class StackService {

  stacksUrl = `${environment.apiUrl}/stacks`;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.stacksUrl}`);
  }
}


