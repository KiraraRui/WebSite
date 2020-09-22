import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProfilComponent } from './profil/profil.component';
import { SalgComponent } from './salg/salg.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { SalgsProduktComponent } from './salgs-produkt/salgs-produkt.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

const routes: Routes = [
  { path: 'salg', component: SalgComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'salgs-produkt', component: SalgsProduktComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogpost', component: BlogpostComponent },
  { path: '', redirectTo: '/front-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
