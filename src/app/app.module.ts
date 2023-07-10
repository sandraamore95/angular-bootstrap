import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PuebloComponent } from './pueblo/pueblo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';


//rutas : 
//home , contact , about
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent

  },
  {
    path: 'contact',
    component:ContactoComponent
  },
  {
    path: 'about',
    component:AboutComponent

  }
  ,
  {
    path: 'pueblo',
    component:PuebloComponent

  },
  
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'

  },



];






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PuebloComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // definimos nuestras rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
