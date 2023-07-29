import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: MultiStepFormComponent }];

@NgModule({
  declarations: [MultiStepFormComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes)],
})
export class MultiStepFormModule {}
