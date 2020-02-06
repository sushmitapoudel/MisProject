import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentModel } from '../../assignment.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AssignmentService } from '../../assignment.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  assignments: Array<AssignmentModel>;
  rows: Array<AssignmentModel  > = [];
 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private assignmentService : AssignmentService) { }

  ngOnInit() {
    this.getAll();
    
  }

  getAll(){
    this.assignmentService.getByStudentId(localStorage.getItem('id')).subscribe(
      data =>{
        this.assignments = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.assignments;
      },error =>{

      }
    );
  }
  
  deleteAssignment(id){
    this.assignmentService.delete(id).subscribe(
      data=>{
        this.getAll();
      }
    );
  }

}
