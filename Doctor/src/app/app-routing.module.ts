import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { KontaktComponent} from './kontakt/kontakt.component';
import { ProfilComponent} from './profil/profil.component';
import { SalgComponent} from './salg/salg.component';
import { ServiceComponent} from './service/service.component';

const routes: Routes = [
  {path: 'front-page', component: FrontPageComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'salg', component: SalgComponent},
  {path: 'service', component: ServiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routingcomponents = [FrontPageComponent, KontaktComponent, ProfilComponent, SalgComponent, ServiceComponent]
