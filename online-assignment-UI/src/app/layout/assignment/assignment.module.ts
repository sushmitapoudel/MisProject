import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { QuestionService } from '../question/question.service';
import { SubjectSerivce } from '../subject/subject.service';
import { AssignmentService } from './assignment.service';
import { StudentService } from '../student/student.service';
import { TeacherViewComponent } from './view-assignment/teacher-view/teacher-view.component';
import { StudentViewComponent } from './view-assignment/student-view/student-view.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddFeedbackComponent } from '../feedback/add-feedback/add-feedback.component';
import { ViewFeedbackComponent } from '../feedback/view-feedback/view-feedback.component';
import { FeedbackSerivce } from '../feedback/feedback.service';


@NgModule({
  declarations: [SubmitAssignmentComponent, ViewAssignmentComponent
    , TeacherViewComponent, StudentViewComponent, AssignmentDetailComponent, AddFeedbackComponent, ViewFeedbackComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    HttpModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [QuestionService, SubjectSerivce, AssignmentService, StudentService, FeedbackSerivce]
})
export class AssignmentModule {
  
 }
