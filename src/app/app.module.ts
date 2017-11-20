import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CollegueService} from './shared/service/collegue.service'

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { ListeCollegueComponent } from './liste-collegue/liste-collegue.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { DetailsComponent } from './details/details.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FiltreNomPipe } from './shared/pipe/filtre-nom.pipe';

const appRoutes: Routes = [
  {path:'classique', component : ListeCollegueComponent},
  {path:'tableau', component : TableauComponent},
  {path:'carrousel', component: CarrouselComponent},
  {path:'details/:nom', component: DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    ListeCollegueComponent,
    CarrouselComponent,
    DetailsComponent,
    ScorePipe,
    FiltreNomPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
