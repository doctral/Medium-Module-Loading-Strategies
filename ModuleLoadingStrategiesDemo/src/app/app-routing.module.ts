import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerHomeComponent } from './features/eager-loading-module/eager-home/eager-home.component';
import { EagerChild1Component } from './features/eager-loading-module/eager-home/eager-child1/eager-child1.component';
import { EagerChild2Component } from './features/eager-loading-module/eager-home/eager-child2/eager-child2.component';
import { CustomPreloadingStrategy } from './core/custom-preloading-strategy';

const routes: Routes = [
  { path: '', redirectTo: 'eager-loading', pathMatch: 'full' },
  {
    path: 'eager-loading', component: EagerHomeComponent, children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: EagerChild1Component },
      { path: 'child2', component: EagerChild2Component },
      { path: '**', redirectTo: 'child1' }
    ]
  },
  {
    path: 'lazy-loading',
    loadChildren: './features/lazy-loading-module/lazy-loading.module#LazyLoadingModule'
  },
  {
    path: 'lazy-loading',
    loadChildren: './features/lazy-loading-module/lazy-loading.module#LazyLoadingModule'
  },
  {
    path: 'pre-loading',
    loadChildren: './features/pre-loading-module/pre-loading.module#PreLoadingModule',
    data: { applyPreload: true }
  },
  { path: '**', redirectTo: 'eager-loading' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: CustomPreloadingStrategy }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }