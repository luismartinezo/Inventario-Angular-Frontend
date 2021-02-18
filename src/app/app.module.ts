import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./Shared/footer/footer.component";
import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { CargoComponent } from './Components/cargo/cargo.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { MercanciaComponent } from './Components/mercancia/mercancia.component';
import { ProductoService } from './Services/producto.service';
import { NuevoProductoComponent } from './Components/mercancia/nuevo-producto/nuevo-producto.component';
import { NuevoUsuarioComponent } from './Components/usuario/nuevo-usuario/nuevo-usuario.component';
import { NuevoCargoComponent } from './Components/cargo/nuevo-cargo/nuevo-cargo.component';
import { UsuarioService } from './Services/usuario.service';
import { CargoService } from './Services/cargo.service';
import { EditarCargoComponent } from './Components/cargo/editar-cargo/editar-cargo.component';
import { DetalleCargoComponent } from './Components/cargo/detalle-cargo/detalle-cargo.component';
import { EditarProductoComponent } from './Components/mercancia/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './Components/mercancia/detalle-producto/detalle-producto.component';
import { EditarUsuarioComponent } from './Components/usuario/editar-usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './Components/usuario/detalle-usuario/detalle-usuario.component';
import { HomeComponent } from './Components/home/home.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, FooterComponent, NavbarComponent, CargoComponent, UsuarioComponent, MercanciaComponent, NuevoProductoComponent, NuevoUsuarioComponent, NuevoCargoComponent, EditarCargoComponent, DetalleCargoComponent, EditarProductoComponent, DetalleProductoComponent, EditarUsuarioComponent, DetalleUsuarioComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [ProductoService, UsuarioService, CargoService]
})
export class AppModule {}
