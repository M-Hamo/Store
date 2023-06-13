import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducers } from './app.state';

@NgModule({
  declarations: [AppRoutingModule.Components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
