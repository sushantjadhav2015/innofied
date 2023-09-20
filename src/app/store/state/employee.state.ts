import { SelectorContext } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { Employee } from 'src/app/modules/employee-details/employee.model';
import { empolyeeService } from 'src/app/service/employee.service';
import { GetEmployee, SearchEmployee } from '../action/employee.action';

export interface EmployeeStateModel {
  employees: Employee[];
  employeesLoaded: boolean;
  searchEmployee: Employee | null;
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    employees: [],
    employeesLoaded: false,
    searchEmployee: null,
  },
})
@Injectable()
export class EmployeeState {
  constructor(private empoloyeeService: empolyeeService) {}

  // todo --selector has logic to get state data
  // todo -- Get employee list from state
  @Selector()
  static getEmployeeList(state: EmployeeStateModel) {
    return state.employees;
  }

  //   get loaded employee info
  @Selector()
  static employeeloaded(state: EmployeeStateModel) {
    return state.employeesLoaded;
  }

  // get search employee
  @Selector()
  static searchEmployee(state: EmployeeStateModel) {
    return state.searchEmployee;
  }

  @Action(GetEmployee)
  getEmployees({ getState, setState }: StateContext<EmployeeStateModel>) {
    return this.empoloyeeService.getData().pipe(
      tap((res) => {
        const state = getState(); //here we are geting all data avaliable in state
        setState({
          ...state,
          employees: res,
          employeesLoaded: true,
        }); // here we are adding data in state with existing data using sprade oprater
      })
    );
  }

  @Action(SearchEmployee)
  searchEmoloyee(
    { getState, setState }: StateContext<EmployeeStateModel>,
    { id }: SearchEmployee
  ) {
    const state = getState();
    const empList = state.employees;
    const index = empList.findIndex((emp) => emp.id === id);
    // console.log(empList[index]);
    setState({
      ...state,
      searchEmployee:empList[index]
    })
  }
}
