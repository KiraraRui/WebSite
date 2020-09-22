import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProfilComponent } from './profil/profil.component';
import { SalgComponent } from './salg/salg.component';
import { ServiceComponent } from './service/service.component';
import { SalgsProduktComponent } from './salgs-produkt/salgs-produkt.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    KontaktComponent,
    ProfilComponent,
    SalgComponent,
    ServiceComponent,
    SalgsProduktComponent,
    BlogComponent,
    LoginComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
