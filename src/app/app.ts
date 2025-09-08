import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // template:'<h1>olá</h1>'
})
export class App {
  protected title = 'Cadastro-Bancario';
}
