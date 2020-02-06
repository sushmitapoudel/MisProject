import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';


const routes: Routes = [
  
  {path:'add', component: AddQuestionComponent},
  {path:'list', component: ViewQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
