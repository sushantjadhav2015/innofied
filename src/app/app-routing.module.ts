import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCroppercomponent } from './modules/image-cropper/image-cropper.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'employeeDetails',
    loadChildren: () =>
      import('./modules/employee-details/employee-details.module').then((m) => m.EmployeeDetailsModule),
  },
  {
    path:'imageCropper',
    component:ImageCroppercomponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
