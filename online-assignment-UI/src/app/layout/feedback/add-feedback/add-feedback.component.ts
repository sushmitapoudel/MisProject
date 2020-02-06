import { Component, OnInit, Input } from '@angular/core';
import { FeedbackSerivce } from '../feedback.service';
import { FeedbackModel } from '../feedback.model';
import { AssignmentModel } from '../../assignment/assignment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit {

  feedback: FeedbackModel = new FeedbackModel();
 
  @Input() answer: AssignmentModel;
  marks =['1','2', '3', '4', '5', '6', '7', '8', '9', '10'];
  
  constructor(private feedbackService: FeedbackSerivce, private router: Router) {
    
  }

  ngOnInit() {
    
  }

  addFeedback(){
    this.feedback.answer = this.answer;
    console.log(this.answer);
    console.log(this.feedback);
    this.feedbackService.addFeedback(this.feedback).subscribe(
      data =>{
          this.router.navigateByUrl("/assignment/list");
      },error =>{

      }
    );
  }

}
