import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FeedbackSerivce } from './feedback.service';
import { FeedbackRoutingModule } from './feedback-routing.module';



@NgModule({
  declarations: [AddFeedbackComponent, ViewFeedbackComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FeedbackRoutingModule
  ],
  providers: [FeedbackSerivce]
})
export class FeedbackModule { }
