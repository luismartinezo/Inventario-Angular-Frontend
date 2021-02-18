import { Injectable } from "@angular/core";
import { Usuario } from "../Models/usuario";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class UsuarioService {
  usuarioURL = "http://localhost:8080/api/v1/usuario/";

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + "lista", cabecera);
  }

  public detalle(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(
      this.usuarioURL + `detalle/${id}`,
      cabecera
    );
  }

  public crear(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(
      this.usuarioURL + "nuevo",
      usuario,
      cabecera
    );
  }

  public editar(usuario: Usuario, id: number): Observable<any> {
    console.log(usuario);
    return this.httpClient.put<any>(
      this.usuarioURL + `actualizar/${id}`,
      usuario,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.usuarioURL + `eliminar/${id}`,
      cabecera
    );
  }
}
