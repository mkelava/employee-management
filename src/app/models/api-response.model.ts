import {Employee} from "./employee.model";

export interface ApiResponse {
  success: boolean;
  data: Employee[];
}
