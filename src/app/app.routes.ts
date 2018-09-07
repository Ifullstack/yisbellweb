
import { Routes, RouterModule } from '@angular/router';
// Pages
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ClasesKidsComponent } from './components/clases-kids/clases-kids.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ClasesJoveComponent } from './components/clases-jove/clases-jove.component';
import { ClasesAdultosComponent } from './components/clases-adultos/clases-adultos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'kids', component: ClasesKidsComponent },
  { path: 'adultos', component: ClasesAdultosComponent },
  { path: 'jove', component: ClasesJoveComponent },
  { path: '**', component: PageNotFoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot( ROUTES, { useHash: true }) ;
