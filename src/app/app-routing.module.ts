import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './body/content/grid/grid.component';
import { SearchComponent } from './body/search/search.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'me', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
