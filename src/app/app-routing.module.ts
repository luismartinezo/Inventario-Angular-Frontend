import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CargoComponent } from "./Components/cargo/cargo.component";
import { DetalleCargoComponent } from "./Components/cargo/detalle-cargo/detalle-cargo.component";
import { EditarCargoComponent } from "./Components/cargo/editar-cargo/editar-cargo.component";
import { NuevoCargoComponent } from "./Components/cargo/nuevo-cargo/nuevo-cargo.component";
import { HomeComponent } from "./Components/home/home.component";
import { DetalleProductoComponent } from "./Components/mercancia/detalle-producto/detalle-producto.component";
import { EditarProductoComponent } from "./Components/mercancia/editar-producto/editar-producto.component";
import { MercanciaComponent } from "./Components/mercancia/mercancia.component";
import { NuevoProductoComponent } from "./Components/mercancia/nuevo-producto/nuevo-producto.component";
import { DetalleUsuarioComponent } from "./Components/usuario/detalle-usuario/detalle-usuario.component";
import { EditarUsuarioComponent } from "./Components/usuario/editar-usuario/editar-usuario.component";
import { NuevoUsuarioComponent } from "./Components/usuario/nuevo-usuario/nuevo-usuario.component";
import { UsuarioComponent } from "./Components/usuario/usuario.component";

const routes: Routes = [
  // home
  { path: "home", component: HomeComponent },
   {path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: "", component: HomeComponent },

  // mercancias o producto
  { path: "mercancias", component: MercanciaComponent },
  {
    path: "nuevo-producto",
    children: [{ path: "", component: NuevoProductoComponent }]
  },
  {
    path: "editar/:id",
    children: [{ path: "", component: EditarProductoComponent }]
  },
  {
    path: "detalle/:id",
    children: [{ path: "", component: DetalleProductoComponent }]
  },

  // usuarios
  { path: "usuarios", component: UsuarioComponent },
  {
    path: "nuevo-usuario",
    children: [{ path: "", component: NuevoUsuarioComponent }]
  },
  {
    path: "editar/:id",
    children: [{ path: "", component: EditarUsuarioComponent }]
  },
  {
    path: "detalle/:id",
    children: [{ path: "", component: DetalleUsuarioComponent }]
  },

  // cargos
  { path: "cargos", component: CargoComponent },
  {
    path: "nuevo-cargo",
    children: [{ path: "", component: NuevoCargoComponent }]
  },
  {
    path: "editar/:id",
    children: [{ path: "", component: EditarCargoComponent }]
  },
  {
    path: "detalle/:id",
    children: [{ path: "", component: DetalleCargoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
