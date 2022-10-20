import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ClientesComponent } from './components/clientes/clientes.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FaqsetionsComponent } from './components/faqsetions/faqsetions.component';
import { CalltoactionsComponent } from './components/calltoactions/calltoactions.component';
import { GalleryComponent } from './components/gallery/gallery.component';


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
    NosotrosComponent,
    ClientesComponent,
    BreadcrumbComponent,
    FaqsetionsComponent,
    CalltoactionsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
