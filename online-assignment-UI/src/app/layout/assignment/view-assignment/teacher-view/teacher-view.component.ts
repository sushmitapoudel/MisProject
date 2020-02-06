import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentModel } from '../../assignment.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AssignmentService } from '../../assignment.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent implements OnInit {

  assignments: Array<AssignmentModel>;
  rows: Array<AssignmentModel> = [];
 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private assignmentService : AssignmentService) { }

  ngOnInit() {
    this.getAll();
    
  }

  getAll(){
    this.assignmentService.getByTeacherId(localStorage.getItem('id')).subscribe(
      data =>{
        this.assignments = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.assignments;
      },error =>{

      }
    );
  }

}
