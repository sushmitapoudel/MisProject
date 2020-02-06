import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SubjectModel } from '../subject.model';
import { StudentService } from '../../student/student.service';
import { SubjectSerivce } from '../subject.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.scss']
})
export class ViewSubjectComponent implements OnInit {

  subjects: Array<SubjectModel>;
  rows: Array<SubjectModel  > = [];
 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private subjectService : SubjectSerivce) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.subjectService.getAll().subscribe(
      data =>{
        this.subjects = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows=this.subjects;
      },error =>{

      }
    );
  }
  

  deleteSubject(id){
    this.subjectService.delete(id).subscribe(
      data =>{
           this.getAll();
      }, error =>{

      }
    );
  }

}
