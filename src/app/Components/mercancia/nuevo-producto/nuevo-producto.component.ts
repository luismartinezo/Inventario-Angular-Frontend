import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mercancia } from "../../../Models/mercancia";
import { Usuario } from "../../../Models/usuario";
import { ProductoService } from "../../../Services/producto.service";
import { UsuarioService } from "../../../Services/usuario.service";

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
  usuarios: Usuario[] = [];
  productos: Mercancia;
  mensajeOK = "";
  mensajeFail = "";
  constructor(
    private productoService: ProductoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
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
