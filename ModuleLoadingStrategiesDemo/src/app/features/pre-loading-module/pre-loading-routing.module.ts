import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreLoadingHomeComponent } from './pre-loading-home/pre-loading-home.component';
import { PreloadingChild1Component } from './pre-loading-home/preloading-child1/preloading-child1.component';
import { PreloadingChild2Component } from './pre-loading-home/preloading-child2/preloading-child2.component';

const routes: Routes=[
  {path: '', component: PreLoadingHomeComponent, children:[
    {path: '', redirectTo:'child1', pathMatch: 'full'},
    {path: 'child1', component: PreloadingChild1Component},
    {path: 'child2', component: PreloadingChild2Component},
    {path: '**', redirectTo: ''}
  ]}
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
export class PreLoadingRoutingModule { }
