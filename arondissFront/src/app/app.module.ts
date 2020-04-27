import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {AuthenticationService} from './services/authentication.service';
import {CitoyensComponent} from './citoyens/citoyens.component';
import {NvcitoyenComponent} from './nvcitoyen/nvcitoyen.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SlideComponent} from './slide/slide.component';
import {ContactComponent} from './contact/contact.component';
import {PublicationComponent} from './articles/publication/publication.component';
import {NvpublicationComponent} from './articles/nvpublication/nvpublication.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CitoyensComponent,
    NvcitoyenComponent,
    NavbarComponent,
    SlideComponent,
    ContactComponent,
    PublicationComponent,
    NvpublicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
