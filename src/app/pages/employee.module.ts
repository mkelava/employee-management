import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelectModule } from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbar } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatCard,
    MatHeaderCell,
    MatTable,
    MatCell,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatNoDataRow,
    MatRow,
    MatHeaderRow,
    MatIconModule,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatButton,
    MatProgressSpinner,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOption,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardContent,
    MatToolbar
  ]
})
export class EmployeeModule {
}
