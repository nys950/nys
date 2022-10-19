import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./views/index/index.component";
import {ProyectosComponet} from "./views/proyectos/proyectos.componet";
import {NosotrosComponent} from "./views/nosotros/nosotros.component";

const routes: Routes = [
  { path:'', component: IndexComponent},
  { path:'proyectos', component: ProyectosComponet},
  { path:'nosotros', component: NosotrosComponent},
  { path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
