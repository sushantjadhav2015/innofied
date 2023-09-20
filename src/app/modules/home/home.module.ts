import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormModule } from './../multi-step-form/multi-step-form.module';
import { OtherModule } from './../other/other.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'other',
        loadChildren: () =>
          import('./../other/other.module').then((m) => m.OtherModule),
      },
      {
        path: 'multiStepForm',
        loadChildren: () =>
          import('./../multi-step-form/multi-step-form.module').then(
            (m) => m.MultiStepFormModule
          ),
      },
      {
        path: 'ngxColorPicker',
        loadChildren: () =>
          import('./../ngx-color-picker/ngx-color-picker.module').then(
            (m) => m.NgxColorPickerModule
          ),
      },
    
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OtherModule,
    MultiStepFormModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {
  constructor() {
    console.log('HOME COMPONENT IS INITIALIZE');
  }
}
