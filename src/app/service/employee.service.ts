import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../modules/employee-details/employee.model';

@Injectable({
  providedIn: 'root',
})
export class empolyeeService {
  jsonUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.jsonUrl);
  }
}
