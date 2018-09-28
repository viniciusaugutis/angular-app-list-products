import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule
  ],
  declarations: [],
  exports: [
    NgSelectModule
  ]
})
export class SharedModule { }
