import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GridComponent } from './body/content/grid/grid.component';
import { MainResolve } from './main/main.resolve';

const routes: Routes = [
  { path: '', component: MainComponent, resolve: { values: MainResolve } },
  { path: 'me', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
