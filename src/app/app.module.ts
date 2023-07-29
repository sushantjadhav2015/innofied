import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { MultiStepFormComponent } from './modules/multi-step-form/multi-step-form.component';
import { MultiStepFormModule } from './modules/multi-step-form/multi-step-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiStepFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }