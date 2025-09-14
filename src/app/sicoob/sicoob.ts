
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective } from 'ngx-mask';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sicoob',
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
  templateUrl: './sicoob.html',
  styleUrls: ['./sicoob.css'],
  encapsulation: ViewEncapsulation.None,
})

export class SicoobComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      codigoManager: ['', [Validators.required]],
      sigla: ['', [Validators.required]],
      cedenteConta: ['', [Validators.required]],
      digitoConta: ['', [Validators.required]],
      chave: ['', [Validators.required]],
      agencia: ['', [Validators.required]],
      seqInicial: ['', [Validators.required]],
      seqFinal: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('✅ Dados Sicoob:', this.form.value);
    } else {
      console.log('❌ Form inválido');
      this.form.markAllAsTouched();
    }
  }
}