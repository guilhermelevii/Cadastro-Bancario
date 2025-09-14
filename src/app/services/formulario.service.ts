import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sicoob } from '../models/sicoob.model';
import { BancoBrasil } from '../models/banco-brasil.model';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private apiUrl = 'http://localhost:3000/formulario'; // ajuste para sua API real

  constructor(private http: HttpClient) {}

  salvarSicoob(dados: Sicoob): Observable<Sicoob> {
    return this.http.post<Sicoob>(`${this.apiUrl}/sicoob`, dados);
  }

  salvarBancoBrasil(dados: BancoBrasil): Observable<BancoBrasil> {
    return this.http.post<BancoBrasil>(`${this.apiUrl}/banco-brasil`, dados);
  }
}
