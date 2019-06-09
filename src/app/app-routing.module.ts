import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GridComponent } from './body/content/grid/grid.component';
import { MainResolve } from './main/main.resolve';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent, resolve: { values: MainResolve } },
  { path: 'me', component: GridComponent },
  { path: 'addUser', component: UsersComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
