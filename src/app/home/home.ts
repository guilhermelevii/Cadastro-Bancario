import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para [(ngModel)] e reactive forms
import { BancoBrasilComponent } from '../banco-brasil/banco-brasil'; // Componente filho
import { SicoobComponent } from '../sicoob/sicoob'; // Componente filho

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,             // Para diretivas como *ngIf
    FormsModule,              // Para [(ngModel)]
    ReactiveFormsModule,      // Se quiser usar forms reativos depois
    BancoBrasilComponent,     // Importando os componentes usados no HTML
    SicoobComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  bancoSelecionado: string = ''; // Variável usada no select [(ngModel)]
}