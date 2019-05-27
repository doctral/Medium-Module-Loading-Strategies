import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingHomeComponent } from './lazy-loading-home/lazy-loading-home.component';
import { Child1Component } from './lazy-loading-home/child1/child1.component';
import { Child2Component } from './lazy-loading-home/child2/child2.component';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';

@NgModule({
  declarations: [
    LazyLoadingHomeComponent,
    Child1Component, 
    Child2Component
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
