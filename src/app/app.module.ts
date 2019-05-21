import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './body/search/search.component';
import { ContentComponent } from './body/content/content.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './body/content/grid/grid.component';
import { CellIdentifiersComponent } from './body/content/cell-identifiers/cell-identifiers.component';
import { HeaderIconsComponent } from './header/header-icons/header-icons.component';
import { CellRowComponent } from './body/content/cell-row/cell-row.component';
import { CellLinkComponent } from './body/content/cell-row/cell-link/cell-link.component';
import { MainResolve } from './main/main.resolve';
import { MainService } from './main/main.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BodyComponent,
    SearchComponent,
    ContentComponent,
    FooterComponent,
    GridComponent,
    CellIdentifiersComponent,
    HeaderIconsComponent,
    CellRowComponent,
    CellLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MainResolve,
    MainService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
