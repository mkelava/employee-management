# Employee Management
This Angular project is designed to provide a web application for managing employee data. 
It includes functionality for displaying a list of employees, adding new employees, filtering, searching, and sorting data. 
Additionally, it features pagination and responsive design to ensure usability across different devices.

## Features
- **Display Employees**: Fetch and display a list of employees from the provided API.
- **Add Employee**: Provide a form to input and save new employee details.
- **Filter and Search**: Implement filtering by position and searching by name or surname.
- **Responsive Design**: Ensure the application is responsive and functions well on various screen sizes.
- **Navigation**: Include navigation for seamless transition between viewing employees and adding new ones.

## Technologies Used
- **Angular** 18.1.2.
- **Angular Material** 18.1.2
- **Tailwind CSS** 3.4.7
- **RxJS**

## API Integration
The application interacts with the following API endpoints using the **in-memory web API**:

- **Endpoint:** https://api.test.ulaznice.hr/paganini/api/job-interview/employees: Fetches the list of employees.
- **Method:** GET.
- **Response:** List of employees in JSON format.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
