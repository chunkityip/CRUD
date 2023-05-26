import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeesListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employee' , component:EmployeesListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
