import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../Models/usuario";
import { UsuarioService } from "../../Services/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  msjOK = "";
  constructor(private usuarioService: UsuarioService, private router: Router) {}

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
  eliminarUsuario(id: number): void {
    console.log(id);
    if (id != null || id == 0)
      if (confirm(`Seguro que desea eliminar el registro ${id}`)) {
        this.usuarioService.borrar(id).subscribe(data => {
          this.msjOK = data.message;
          alert(this.msjOK);
          this.cargarUsuarios();
          this.router.navigate(["usuarios"]);
        });
      }
  }
}
