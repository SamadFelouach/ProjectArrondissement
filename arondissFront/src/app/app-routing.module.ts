import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {NvcitoyenComponent} from './nvcitoyen/nvcitoyen.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ContactComponent} from './contact/contact.component';
import {NvpublicationComponent} from './articles/nvpublication/nvpublication.component';
import {CitoyensComponent} from './citoyens/citoyens.component';
import {PublicationComponent} from './articles/publication/publication.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin/dash', component: DashboardComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'publierArticle', component: NvpublicationComponent},
  {path: 'nvcitoyen', component: NvcitoyenComponent},
  {path: 'pub ', component: PublicationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
