import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

//creamos las rutas con mediante el router module. Constante que contiene un array de obj.
const routes : Routes = [ 
  {
    path:"", // si no ponemos nada nos redirigira a la pagina formulario
    redirectTo: "home",
    pathMatch:"full"
  },
  {
    path:'home',
    component:  HomeComponent
  },
  {
    path:'formulario',
    component: FormularioComponent
  },
  {
    path: "**", // si ponemos cualquier ruta que no este especificada nos mostrara el componente not found.
    component: PageNotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], //le especificamos que las rutas la contiene la constante routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
// declaramos las rutas mediante un array de objetos.
