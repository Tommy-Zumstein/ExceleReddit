import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './body/content/grid/grid.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'main', component: MainComponent },
  { path: 'me', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
