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
import { CargoService } from './Services/cargo.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, FooterComponent, NavbarComponent, CargoComponent, UsuarioComponent, MercanciaComponent, NuevoProductoComponent, NuevoUsuarioComponent, NuevoCargoComponent],
  bootstrap: [AppComponent],
  providers: [ProductoService, UsuarioService, CargoService]
})
export class AppModule {}
