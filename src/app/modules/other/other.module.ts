import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OtherComponent } from './other.component';

const routes: Routes = [{ path: '', component: OtherComponent }];

@NgModule({
  declarations: [OtherComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes)],
})
export class OtherModule {
  constructor(){
    console.log('OTHER COMPONENT IS INITIALIZE'); 
  }
}
