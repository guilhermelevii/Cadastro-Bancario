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

// 👉 Quer que eu já te mostre como ficaria a API fake com JSON-Server (pra você testar os POSTs sem depender do backend real)?


// Quando você criou o arquivo FormularioService.ts e injetou o HttpClient no construtor (a linha constructor(private http: HttpClient) {}), você estava dizendo ao Angular: "Ei, meu serviço precisa de uma instância do HttpClient para funcionar".

// No entanto, o Angular não sabia onde encontrar essa instância. Para que o Angular possa injetar o HttpClient em qualquer lugar da sua aplicação, você precisa registrar o HttpClient como um "provider" (provedor) disponível.

// Em aplicações Angular standalone, esse registro é feito no arquivo de configuração principal, que é o app.config.ts. Ao adicionar a linha provideHttpClient() nesse arquivo, você efetivamente disse ao Angular: "Agora sim, aqui está o provedor do HttpClient. De agora em diante, qualquer componente ou serviço que precise dele pode pedi-lo e eu irei fornecê-lo".

// Resumindo: O problema não estava no seu código do serviço, mas na configuração da sua aplicação. O seu serviço pedia uma dependência (HttpClient), mas a aplicação não estava configurada para "fornecer" essa dependência. Ao adicionar provideHttpClient(), você resolveu essa "falta de comunicação".