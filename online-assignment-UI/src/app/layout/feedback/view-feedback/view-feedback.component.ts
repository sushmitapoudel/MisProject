import { Component, OnInit, Input } from '@angular/core';
import { FeedbackModel } from '../feedback.model';
import { FeedbackSerivce } from '../feedback.service';
import { QuestionModel } from '../../question/question.model';
import { StudentModel } from '../../student/student.model';
import { SubjectModel } from '../../subject/subject.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { AssignmentModel } from '../../assignment/assignment.model';
import { TeacherModel } from '../../teacher/teacher.model';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {

  public feedback: FeedbackModel ;
  @Input() id: string;
  constructor( private feedbackService: FeedbackSerivce) {
    this.feedback = new FeedbackModel();
    this.feedback.answer = new AssignmentModel();
        this.feedback.answer.question = new QuestionModel();
        this.feedback.answer.student = new StudentModel();
        this.feedback.answer.question.teacher = new TeacherModel();
        this.feedback.answer.question.subject = new SubjectModel();
        this.feedback.answer.question.teacher.user = new UserModel();
        this.feedback.answer.student.user = new UserModel();
   }

  ngOnInit() {
    this.getByAnswerId(this.id);
  }
  getByAnswerId(id){
    this.feedbackService.getByAnswerId(id).subscribe(

      data =>{
         this.feedback = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
      error =>{
        
      }
    );
  }

}
