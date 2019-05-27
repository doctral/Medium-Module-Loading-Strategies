import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoadingHomeComponent } from './pre-loading-home/pre-loading-home.component';
import { PreloadingChild1Component } from './pre-loading-home/preloading-child1/preloading-child1.component';
import { PreloadingChild2Component } from './pre-loading-home/preloading-child2/preloading-child2.component';
import { PreLoadingRoutingModule } from './pre-loading-routing.module';

@NgModule({
  declarations: [PreLoadingHomeComponent, PreloadingChild1Component, PreloadingChild2Component],
  imports: [
    CommonModule,
    PreLoadingRoutingModule
  ]
})
export class PreLoadingModule { }
