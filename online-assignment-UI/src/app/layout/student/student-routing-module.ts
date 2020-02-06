import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
    {path: 'list', component: ViewStudentComponent },
    {path: 'add', component: AddStudentComponent },
    {path: ':id', component: EditStudentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {
}