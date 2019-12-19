import { Injectable } from '@angular/core';
import{ AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee} from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase : AngularFireDatabase) { }
  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  insertEmployee(employee : Employee)
  {
  this.employeeList.push({
    Firstname: employee.Firstname,
    Lastname: employee.Lastname,
    Username: employee.Username,
    Gender: employee.Gender,
    Email: employee.Email
  });
  }
  updateEmployee(employee : Employee){
  this.employeeList.update(employee.$key,
    {
      Firstname: employee.Firstname,
      Lastname: employee.Lastname,
      Username: employee.Username,
      Gender: employee.Gender,
      Email: employee.Email
    });


  }
  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }
}
