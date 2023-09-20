import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { empolyeeService } from 'src/app/service/employee.service';
import {
  GetEmployee,
  SearchEmployee,
} from 'src/app/store/action/employee.action';
import { EmployeeState } from 'src/app/store/state/employee.state';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  employee: Employee[] = [];
  searchTerm: any = '';
  filteredCards: Employee[] = [];

  @Select(EmployeeState.getEmployeeList) employee$!: Observable<Employee[]>;
  @Select(EmployeeState.employeeloaded) employeeloaded$!: Observable<boolean>;
  @Select(EmployeeState.searchEmployee) filteredCards$!: Observable<Employee[]>;

  empLoadedSub!: Subscription;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.getEmployeeData();
    this.employee$.subscribe((res) => {
      this.employee = res;
    });
  }

  getEmployeeData() {
    this.empLoadedSub = this.employeeloaded$.subscribe((res) => {
      if (!res) {
        this.store.dispatch(new GetEmployee());
      }
    });
  }

  search() {
    this.filteredCards = this.employee.filter(
      (card) =>
        card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        card.id.toString().includes(this.searchTerm.toLowerCase())
    );
    console.log('Search Term:', this.searchTerm);
    console.log('Filtered Data:');
    // const id = parseInt(this.searchTerm, 10);
    // this.store.dispatch(new SearchEmployee(id));

    // this.filteredCards$.subscribe((res:any) => {
    //   this.filteredCards.push(res);
    // });

  }

  ngOnDestroy(): void {
    this.empLoadedSub.unsubscribe;
  }
}
