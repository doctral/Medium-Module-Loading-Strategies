import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './lazy-loading-home/child1/child1.component';
import { Child2Component } from './lazy-loading-home/child2/child2.component';
import { LazyLoadingHomeComponent } from './lazy-loading-home/lazy-loading-home.component';

const routes: Routes = [
  {path: '', component: LazyLoadingHomeComponent, children:[
    {path: '', redirectTo: 'child1', pathMatch: 'full'},
    {path: 'child1', component: Child1Component},
    {path: 'child2', component: Child2Component}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LazyLoadingRoutingModule { }
