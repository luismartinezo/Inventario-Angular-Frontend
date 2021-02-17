import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mercancia } from "../../../Models/mercancia";
import { ProductoService } from "../../../Services/producto.service";

@Component({
  selector: "app-nuevo-producto",
  templateUrl: "./nuevo-producto.component.html",
  styleUrls: ["./nuevo-producto.component.css"]
})
export class NuevoProductoComponent implements OnInit {
  form: any = {
    id: 0,
    nombre_producto: "",
    cantidad: 0,
    fecha_ingreso: Date,
    usuario_id: 1
  };
  productos: Mercancia;
  mensajeOK = "";
  mensajeFail = "";
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {}

  onCreate(form): void {
    console.log(form);
    this.productoService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.message;
        alert(this.mensajeOK);
        this.router.navigate(["productos"]);
      },
      (err: any) => {
        this.mensajeFail = err.error.message;
      }
    );
  }
}
