import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherModel } from '../teacher.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.scss']
})
export class ViewTeacherComponent implements OnInit {
  teachers: Array<TeacherModel>;
  rows: Array<TeacherModel  > = [];
 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private teacherService : TeacherService) { }

  ngOnInit() {
    this.teacherService.getAll().subscribe(
      data =>{
        this.teachers = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.teachers);
        this.rows=this.teachers;
      },error =>{

      }
    );
  }

}
