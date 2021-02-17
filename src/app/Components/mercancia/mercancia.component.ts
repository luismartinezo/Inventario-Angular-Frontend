import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mercancia } from '../../Models/mercancia';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {

 productos: Mercancia[] = [];
  msjOK = "";
  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit() {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
        console.log(this.productos);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  eliminarCliente(id: number): void {
    console.log(id);
    if (confirm(`Seguro que desea eliminar el registro ${id}`)) {
      this.productoService.borrar(id).subscribe(data => {
        this.msjOK = data.message;
        alert(this.msjOK);
        this.cargarProductos();
        this.router.navigate(["clientes"]);
      });
    }
    // if(id != null || id ==0)
    // this.clienteService.borrar()
  }

}