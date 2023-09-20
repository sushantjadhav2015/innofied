import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { FormsModule } from '@angular/forms';
// ngxs
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { EmployeeState } from 'src/app/store/state/employee.state';


const routes: Routes = [{ path: '', component: EmployeeDetailsComponent }];

@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    // NgxsModule.forRoot([EmployeeState]),
    // NgxsLoggerPluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class EmployeeDetailsModule {
  constructor() {}
}
