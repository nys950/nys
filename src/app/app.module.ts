import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { NavbarIndexComponent } from "./navegation/navbars/navbar-index/navbar-index.component";
import { CarouselComponent } from './components/carousel/carousel.component';
import { MegaMenuComponent } from './navegation/navbars/mega-menu/mega-menu.component';
import { FooterComponent } from './navegation/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProyectosComponet } from './views/proyectos/proyectos.componet';
import { NosotrosComponent } from './views/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarIndexComponent,
    CarouselComponent,
    MegaMenuComponent,
    FooterComponent,
    ContactusComponent,
    ProyectosComponet,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
