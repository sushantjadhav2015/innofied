import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxColorPickerComponent } from './ngx-color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';

const routes: Routes = [{ path: '', component: NgxColorPickerComponent }];

@NgModule({
  declarations: [NgxColorPickerComponent],
  imports: [
    ReactiveFormsModule,
    ColorPickerModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class NgxColorPickerModule {
  constructor() {}
}
