import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout.module';
import { StudentRoutingModule } from './student-routing-module';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import {  HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ViewStudentComponent, AddStudentComponent, EditStudentComponent],
  providers : [StudentService],
  imports: [
    CommonModule,
    LayoutModule,
    StudentRoutingModule,
    NgxDatatableModule, FormsModule, HttpModule, RouterModule
  ]
})
export class StudentModule { }
