import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'multiStepForm',
    loadChildren: () =>
      import('./modules/multi-step-form/multi-step-form.module').then(
        (m) => m.MultiStepFormModule
      ),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
