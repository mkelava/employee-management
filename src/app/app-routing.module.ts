import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./pages/employee/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./pages/employee/create-employee/create-employee.component";

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: 'add', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
