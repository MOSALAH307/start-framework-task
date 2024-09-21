import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start-component/start-component.component';

export const routes: Routes = [
  { path: '', title: 'home', component: StartComponent },
  { path: 'about', title: 'about', component: AboutComponent },
  { path: 'portfolio', title: 'portfolio', component: PotfolioComponent },
  { path: 'contact', title: 'contact', component: ContactComponent },
];
