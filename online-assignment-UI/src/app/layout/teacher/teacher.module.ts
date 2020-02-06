import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TeacherService } from './teacher.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ViewTeacherComponent, AddTeacherComponent, EditTeacherComponent],
  providers:[TeacherService],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule, NgxDatatableModule, HttpModule, RouterModule]
})
export class TeacherModule { }
