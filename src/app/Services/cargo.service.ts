import { Injectable } from "@angular/core";
import { Cargo } from "../Models/cargo";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class CargoService {
  cargoURL = "http://localhost:8080/api/v1/cargo/";

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Cargo[]> {
    return this.httpClient.get<Cargo[]>(this.cargoURL + "lista", cabecera);
  }

  public detalle(id: number): Observable<Cargo> {
    return this.httpClient.get<Cargo>(
      this.cargoURL + `detalle/${id}`,
      cabecera
    );
  }

  public crear(cargo: Cargo): Observable<any> {
    return this.httpClient.post<any>(this.cargoURL + "nuevo", cargo, cabecera);
  }

  public editar(cargo: Cargo, id: number): Observable<any> {
    console.log(cargo);
    return this.httpClient.put<any>(
      this.cargoURL + `actualizar/${id}`,
      cargo,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.cargoURL + `eliminar/${id}`,
      cabecera
    );
  }
}
