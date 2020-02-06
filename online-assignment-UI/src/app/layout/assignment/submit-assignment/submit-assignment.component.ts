import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../../question/question.model';
import { SubjectModel } from '../../subject/subject.model';
import { SubjectSerivce } from '../../subject/subject.service';
import { QuestionService } from '../../question/question.service';
import { StudentService } from '../../student/student.service';
import { Router } from '@angular/router';
import { QuestionModule } from '../../question/question.module';
import { AssignmentModel } from '../assignment.model';
import { StudentModel } from '../../student/student.model';
import { AssignmentService } from '../assignment.service';

@Component({  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.scss']
})
export class SubmitAssignmentComponent implements OnInit {

  assignment: AssignmentModel;
  subjects: Array<SubjectModel>;
  questions: Array<QuestionModel>;
  grades: Array<String>;
  faculties: Array<String>;
  grade: string;
  faculty: string;
  subject: SubjectModel;

  constructor(private subjectService: SubjectSerivce
    , private questionService: QuestionService
    , private studentService: StudentService
    , private asignmentService: AssignmentService
    , private router: Router) {
    this.assignment = new AssignmentModel();
    this.assignment.student = new StudentModel();
    this.assignment.question = new QuestionModel();
    this.subject = new SubjectModel();
    this.subjects = [];
  }

  ngOnInit() {
    this.grades = ['11', '12'];
    this.faculty = localStorage.getItem("Faculty");
    this.getStudent();
  }
  getStudent() {
    this.studentService.getById(this.getStudentId()).subscribe(
       data => {
        this.assignment.student = JSON.parse(JSON.parse(JSON.stringify(data))._body);
       }, error => {

       }
     );
   }

   getStudentId() {
     return localStorage.getItem('id');
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

  changeSubject(event: any) {
      this.getSubject(this.grade, this.faculty);
  }

  getQuestions(event: any) {
    this.questionService.getByGradeAndSubject(this.grade, this.subject.name).subscribe(
      data => {
        this.questions = JSON.parse( JSON.parse(JSON.stringify(data))._body);
      }, error => {

      }
    );
  }

  submitAssignment() {
    console.log(this.assignment);
      this.asignmentService.submitAssignment(this.assignment).subscribe(
        data => {
            this.router.navigateByUrl('/assignment/list');
        }, error => {

        }
      );
  }
}
