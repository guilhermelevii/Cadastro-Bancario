import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para [(ngModel)] e reactive forms
import { BancoBrasilComponent } from '../banco-brasil/banco-brasil'; // Componente filho
import { SicoobComponent } from '../sicoob/sicoob'; // Componente filho
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCard } from "@angular/material/card";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // Para diretivas como *ngIf
    FormsModule, // Para [(ngModel)]
    ReactiveFormsModule, // Se quiser usar forms reativos depois
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    BancoBrasilComponent, // Importando os componentes usados no HTML
    SicoobComponent,
    MatCard
],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  logoPath: string = 'src\assets\logosif_4.png';
  bancoSelecionado: string = ''; // Variável usada no select [(ngModel)]
}