import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api.response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';


//A service class for managing employee data.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Here is the base URL set to 8080
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/employees';

  //Here are the methods to interact with the employee API

  //Getting all employees
  getEmployees() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  //Getting an employee by ID
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  //Creating a new employee
  createEmployee(employee  : Employee) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl , employee);
  }

  //Updating an existing employee
  updateEmployee(id : number , employee : Employee) : Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + employee.id , employee);
  }

  //Deleting an employee
  deleteEmployee(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}