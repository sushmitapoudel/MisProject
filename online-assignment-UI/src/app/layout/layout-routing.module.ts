import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
            { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
            { path: 'question', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
            { path: 'assignment', loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule) },
            { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
