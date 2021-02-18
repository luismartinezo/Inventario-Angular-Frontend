import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cargo } from "../../Models/cargo";
import { CargoService } from "../../Services/cargo.service";

@Component({
  selector: "app-cargo",
  templateUrl: "./cargo.component.html",
  styleUrls: ["./cargo.component.css"]
})
export class CargoComponent implements OnInit {
  cargos: Cargo[] = [];
  msjOK = "";
  constructor(private cargoService: CargoService, private router: Router) {}

  ngOnInit() {
    this.cargarCargos();
  }
  cargarCargos(): void {
    this.cargoService.lista().subscribe(
      data => {
        this.cargos = data;
        console.log(this.cargos);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  eliminarCargo(id: number): void {
    console.log(id);
    if (id != null || id != 0)
      if (confirm(`Seguro que desea eliminar el registro ${id}`)) {
        this.cargoService.borrar(id).subscribe(data => {
          this.msjOK = data.message;
          alert(this.msjOK);
          this.cargarCargos();
          this.router.navigate(["cargos"]);
        });
      }
  }
}
