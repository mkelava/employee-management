import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {ApiResponse} from "../../../models/api-response.model";
import {Employee} from "../../../models/employee.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];
  public displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'jobTitle'];
  public dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();
  public jobTitles: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService,
              public snackBar: MatSnackBar,
              private _liveAnnouncer: LiveAnnouncer,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: ApiResponse) => {
        if (response.success) {
          this.employeeList = response.data;
          this.dataSource.data = response.data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.populateJobTitles();
        }
      },
      error: (err) => this.snackBar.open('Please try again', 'error')
    });
  }

  populateJobTitles(): void {
    const titles = new Set<string>(this.employeeList.map(emp => emp.jobTitle));
    this.jobTitles = Array.from(titles);
  }

  onSearch(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    this.applySearch(input.value);
  }

  applySearch(searchValue: any): void {
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      const search = filter.trim().toLowerCase();
      return data.firstName.toLowerCase().includes(search) || data.lastName.toLowerCase().includes(search);
    };
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }

  applyFilter(jobTitle: string): void {
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      return jobTitle ? data.jobTitle === filter : true;
    };
    this.dataSource.filter = jobTitle;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  navigateToAdd() {
    this.router.navigate(['/add']);
  }

}
