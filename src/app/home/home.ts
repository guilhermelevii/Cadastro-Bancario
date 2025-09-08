import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BancoBrasilComponent } from '../banco-brasil/banco-brasil';
import { SicoobComponent } from '../sicoob/sicoob';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, BancoBrasilComponent, SicoobComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  bancoSelecionado: string = '';
}
