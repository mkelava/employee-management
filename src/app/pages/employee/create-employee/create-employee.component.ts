import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: [ './create-employee.component.css' ]
})
export class CreateEmployeeComponent implements OnInit {

  saveEmployeeForm!: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.saveEmployeeForm = new FormGroup({
        id: new FormControl(null),
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        dateOfBirth: new FormControl(null, Validators.required),
        jobTitle: new FormControl(null, Validators.required)
      }
    );
  }

  public saveEmployee(): void {
    if (this.saveEmployeeForm.valid) {
      console.log(this.saveEmployeeForm.value)
    }
  }

  navigateToEmployeeList() {
    this.router.navigate(['']);
  }
}
