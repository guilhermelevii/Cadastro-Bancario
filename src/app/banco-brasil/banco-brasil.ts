

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective } from 'ngx-mask';

import { BancoBrasil } from '../models/banco-brasil.model';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-banco-brasil',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgxMaskDirective,
    
  ],
  templateUrl: './banco-brasil.html',
  styleUrls: ['./banco-brasil.css'],
})
export class BancoBrasilComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formularioService: FormularioService
  ) {
    this.form = this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      codigoManager: ['', [Validators.required]],
      sigla: ['', [Validators.required]],
      numeroConvenio: ['', [Validators.required]],
      eCommerce: ['', [Validators.required]],
      carteira: ['', [Validators.required]],
      variacao: ['', [Validators.required]],
      cedenteConta: ['', [Validators.required]],
      digitoConta: ['', [Validators.required]],
      agencia: ['', [Validators.required]],
      digitoAgencia: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const dados: BancoBrasil = this.form.value;
      this.formularioService.salvarBancoBrasil(dados).subscribe({
        next: (res) => console.log('✅ Dados enviados (Banco Brasil):', res),
        error: (err) => console.error('❌ Erro ao enviar Banco Brasil', err),
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
