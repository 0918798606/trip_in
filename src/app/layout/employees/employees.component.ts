import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {
buttons = [
  {class:'btn-secondary',icon:'fa fa-eye'}
]
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

}
