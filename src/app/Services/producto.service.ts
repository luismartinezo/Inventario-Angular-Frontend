import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mercancia } from "../Models/mercancia";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class ProductoService {
  productoURL = "http://localhost:8080/api/v1/mercancia/";

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Mercancia[]> {
    return this.httpClient.get<Mercancia[]>(
      this.productoURL + "lista",
      cabecera
    );
  }

  public detalle(id: number): Observable<Mercancia> {
    return this.httpClient.get<Mercancia>(
      this.productoURL + `detalle/${id}`,
      cabecera
    );
  }

  public crear(producto: Mercancia): Observable<any> {
    return this.httpClient.post<any>(
      this.productoURL + "nuevo",
      producto,
      cabecera
    );
  }

  public editar(producto: Mercancia, id: number): Observable<any> {
    console.log(producto);
    return this.httpClient.put<any>(
      this.productoURL + `actualizar/${id}`,
      producto,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.productoURL + `eliminar/${id}`,
      cabecera
    );
  }
}
