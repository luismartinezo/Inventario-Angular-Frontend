import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MercanciaComponent } from "./Components/mercancia/mercancia.component";

const routes: Routes = [
  { path: "home", component: MercanciaComponent },
  { path: "", component: MercanciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
