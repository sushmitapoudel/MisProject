import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionModel } from '../question.model';
import { QuestionService } from '../question.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { StudentService } from '../../student/student.service';
import { StudentModel } from '../../student/student.model';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {


  questions: Array<QuestionModel>;

  student : StudentModel;

  rows: Array<QuestionModel> = [];

 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private questionService: QuestionService, private studentService: StudentService) {

  }
  ngOnInit() {
    let role = localStorage.getItem('Role');
    console.log(role);
    if(role =='Teacher'){
    this.getQuestionByTeacherId();
    }
    if(role =='Admin'){
      this.getQuestionforAdmin();
      }
      if(role =='Student'){
        
        this.getQuestionforStudent();
        }
  }

  getQuestionforStudent(){
    const id = localStorage.getItem('id');
    this.studentService.getById(id).subscribe(
      data =>{
        this.student = JSON.parse(JSON.parse(JSON.stringify(data))._body);
       console.log(this.student);
     var  faculty = this.student.faculty
     var  grade = this.student.grade
       this.questionService.getByGradeAndFaculty(grade, faculty).subscribe(
        data => {
          this.questions = JSON.parse(JSON.parse(JSON.stringify(data))._body);
          this.rows = this.questions;
        }, error => {
            
        }
      );
      }, error =>{

      }
    );
    

  }

  getQuestionforAdmin(){
    this.questionService.getAll().subscribe(
      data => {
        this.questions = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.questions;
      }, error => {
          
      }
    );
  }

  getQuestionByTeacherId() {
    const teacherId = localStorage.getItem('id');
    this.questionService.getByTeacherId(teacherId).subscribe(
      data => {
        this.questions = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.questions;
      }, error => {
          
      }
    );
  }

}
