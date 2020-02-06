import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

const routes: Routes = [
    {path: 'list', component: ViewTeacherComponent },
    {path: 'add', component: AddTeacherComponent },
    {path: ':id', component: EditTeacherComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule{
}