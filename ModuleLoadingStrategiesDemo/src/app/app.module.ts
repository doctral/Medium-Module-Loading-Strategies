import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadingModule } from './features/eager-loading-module/eager-loading.module';
import { CustomPreloadingStrategy } from './core/custom-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerLoadingModule
  ],
  providers: [
    CustomPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
