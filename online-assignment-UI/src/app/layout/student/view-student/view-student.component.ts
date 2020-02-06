import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { StudentModel } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  students: Array<StudentModel>;
  rows: Array<StudentModel> = [];
 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.getAllStudent();
  }
  getAllStudent() {
    this.studentService.getAll().subscribe(
      data => {
        this.students = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.students;
        console.log(this.students);
      },
      error => {

      }
    );
  }
 
}
