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
import { MercanciaComponent } from './Components/mercancia/mercancia.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, FooterComponent, NavbarComponent, CargoComponent, UsuarioComponent, MercanciaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
