import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CargoComponent } from "./Components/cargo/cargo.component";
import { NuevoCargoComponent } from "./Components/cargo/nuevo-cargo/nuevo-cargo.component";
import { MercanciaComponent } from "./Components/mercancia/mercancia.component";
import { NuevoProductoComponent } from "./Components/mercancia/nuevo-producto/nuevo-producto.component";
import { NuevoUsuarioComponent } from "./Components/usuario/nuevo-usuario/nuevo-usuario.component";
import { UsuarioComponent } from "./Components/usuario/usuario.component";

const routes: Routes = [
  { path: "home", component: MercanciaComponent },
  { path: "", component: MercanciaComponent },
  {
    path: "nuevo-producto",
    children: [{ path: "", component: NuevoProductoComponent }]
  },
  { path: "usuarios", component: UsuarioComponent },
  {
    path: "nuevo-usuario",
    children: [{ path: "", component: NuevoUsuarioComponent }]
  },
  { path: "cargos", component: CargoComponent },
  {
    path: "nuevo-cargo",
    children: [{ path: "", component: NuevoCargoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
