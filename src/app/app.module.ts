import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {environment} from '../environments/environment';



// import {EmployeesComponent} from './layout/employees/employees.component';
// import {EmployeeComponent} from './layout/employees/employee/employee.component';
// import {EmployeeListComponent} from './layout/employees/employee-list/employee-list.component';




@NgModule({
    imports: [

        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        DataTablesModule

    ],
    declarations: [
      AppComponent,



      // EmployeesComponent,
      // EmployeeComponent,
    // EmployeeListComponent

    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent],


})
export class AppModule {}
