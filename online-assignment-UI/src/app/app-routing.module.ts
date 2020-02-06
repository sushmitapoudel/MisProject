import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.gaurd';

const routes: Routes = [
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),  canActivate: [AuthGuard]},
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: '**', redirectTo: 'not-found' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
