import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LayoutModule} from './modules/layout/layout.module';
import {CoreModule } from './modules/core/core.module'
@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule,
     LayoutModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
