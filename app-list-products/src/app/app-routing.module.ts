import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './pages/list-products/list-products.component';

const routes: Routes = [
  { path: 'produtos', component: ListProductsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
