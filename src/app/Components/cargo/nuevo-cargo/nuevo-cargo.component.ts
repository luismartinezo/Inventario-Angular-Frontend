import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cargo } from "../../../Models/cargo";
import { CargoService } from "../../../Services/cargo.service";

@Component({
  selector: "app-nuevo-cargo",
  templateUrl: "./nuevo-cargo.component.html",
  styleUrls: ["./nuevo-cargo.component.css"]
})
export class NuevoCargoComponent implements OnInit {
  form: any = {
    id: 0,
    nombre: ""
  };
  cargos: Cargo[] = [];
  mensajeOK = "";
  mensajeFail = "";
  constructor(private cargoService: CargoService, private router: Router) {}

  ngOnInit() {}
  onCreate(form): void {
    console.log(form);
    this.cargoService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.message;
        alert(this.mensajeOK);
        this.router.navigate(["cargos"]);
      },
      (err: any) => {
        this.mensajeFail = err.error.message;
        alert(this.mensajeFail);
      }
    );
  }
}
