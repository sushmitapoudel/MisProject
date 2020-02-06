import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';


const routes: Routes = [
    {path: 'add', component: AddSubjectComponent },
    {path: 'list', component: ViewSubjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
