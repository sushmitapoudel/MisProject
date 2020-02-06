import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../../subject/subject.model';
import { SubjectSerivce } from '../../subject/subject.service';
import { QuestionModel } from '../question.model';
import { QuestionService } from '../question.service';
import { TeacherService } from '../../teacher/teacher.service';
import { Router } from '@angular/router';
import { TeacherModel } from '../../teacher/teacher.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  question: QuestionModel;
  subjects: Array<SubjectModel>;
  grades: Array<String>;
  faculty: Array<String>;

  constructor(private subjectService: SubjectSerivce
    , private questionService: QuestionService
    , private teacherService: TeacherService
    , private router: Router) {
    this.question = new QuestionModel();
    this.question.subject = new SubjectModel();
    this.question.teacher = new TeacherModel();

  }


  ngOnInit() {
    this.grades = ["11", "12"];
    this.faculty = ["Science", "Management"];
    this.getTeacher();
  }

  getSubject(grade, faculty) {
    this.subjectService.getSubjects(grade, faculty).subscribe(
      data => {
        this.subjects = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.subjects);
      }, error => {

      }
    );
  }

  changeSubject(event: any){
      this.getSubject(this.question.subject.grade,this.question.subject.faculty);
  }
  
  addQuestion(){
  
      this.questionService.addQuestion(this.question).subscribe(
        data =>{
          this.router.navigateByUrl("/question/list")
        },
        error =>{

        }
      );

  }

  getTeacher(){
   this.teacherService.getById(this.getTeacherId()).subscribe(
      data =>{
       this.question.teacher = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }, error => {

      }
    );
  }

  getTeacherId(){
    return localStorage.getItem("id");
  }
}
