import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerHomeComponent } from './eager-home/eager-home.component';
import { EagerChild1Component } from './eager-home/eager-child1/eager-child1.component';
import { EagerChild2Component } from './eager-home/eager-child2/eager-child2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EagerHomeComponent,
    EagerChild1Component,
    EagerChild2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EagerLoadingModule { }
