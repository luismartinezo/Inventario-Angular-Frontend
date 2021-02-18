import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../../../Services/producto.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-editar-producto",
  templateUrl: "./editar-producto.component.html",
  styleUrls: ["./editar-producto.component.css"]
})
export class EditarProductoComponent implements OnInit {
  form: any = {};
  msjErr = "";
  msjOK = "";

  failInit = false;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detalle(id).subscribe(
      data => {
        this.form.id = data.id;
        this.form.nombre_producto = data.nombre_producto;
        this.form.cantidad = data.cantidad;
        this.form.usuario_id = data.usuario_id;
        this.form.fecha_ingreso = data.fecha_ingreso;
      },
      (err: any) => {
        this.failInit = true;
        this.router.navigate([""]);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.editar(this.form, id).subscribe(
      data => {
        // console.log(this.form);
        this.msjOK = data.message;
        alert(this.msjOK);
        this.router.navigate(["mercancias"]);
      },
      (err: any) => {
        this.msjErr = err.error.message;
      }
    );
  }

  volver(): void {
    window.history.back();
  }
}
