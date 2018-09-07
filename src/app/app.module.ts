
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Navbar
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
// Pages
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

// Rutas
import { APP_ROUTES } from './app.routes';
import { NavbarSuperiorComponent } from './components/navbar-superior/navbar-superior.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { ClasesKidsComponent } from './components/clases-kids/clases-kids.component';
import { ClasesJoveComponent } from './components/clases-jove/clases-jove.component';
import { ClasesAdultosComponent } from './components/clases-adultos/clases-adultos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    HomeComponent,
    SectionComponent,
    FooterComponent,
    BlogComponent,
    ContactoComponent,
    PageNotFoundComponent,
    NavbarSuperiorComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    EquipoComponent,
    GaleriaComponent,
    ClasesKidsComponent,
    ClasesJoveComponent,
    ClasesAdultosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
