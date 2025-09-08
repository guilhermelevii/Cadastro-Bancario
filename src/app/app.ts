import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./home/home";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root', // Seletor do componete, se for usar esse componente em outro lugar você utiliza ele <app-root></app-root>.Utilizado no index.html
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule, HomeComponent],
  templateUrl: './app.html', //Obrigatorio
  styleUrl: './app.css',
  // template:'<h1>olá</h1>'
})
export class App {
  protected title = 'Cadastro-Bancario';
}


// NgModule(antigo) vs Standalone