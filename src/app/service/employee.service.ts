import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../models/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://api.test.ulaznice.hr/paganini/api/job-interview/employees';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
