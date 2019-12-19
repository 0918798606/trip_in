  import { Component, OnInit, ViewChild } from '@angular/core';
  import { EmployeeService } from '../shared/employee.service';
  import {Employee} from '../shared/employee.model';
  import {ToastrService } from 'ngx-toastr';
  import { DataTableDirective } from 'angular-datatables';
  import {Subject} from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];
@ViewChild(DataTableDirective, {static : false})
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  rerender(): void {
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  // Destroy the table first
  dtInstance.destroy();
  // Call the dtTrigger to rerender again
  this.dtTrigger.next();
  });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }
  onDelete(key: string) {
    if (confirm('are you sure to delete this record?') === true) {
    this.employeeService.deleteEmployee(key);
    this.toastr.warning('Delated Successfully', 'Employee register');
  }
  }

  ngOnInit() {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
       const y = element.payload.toJSON();
       y['$key'] = element.key;
       this.employeeList.push(y as Employee);
      });
      this.dtTrigger.next();
    });
  }

}
