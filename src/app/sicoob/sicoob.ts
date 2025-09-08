import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sicoob',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sicoob.html',
  styleUrls: ['./sicoob.css']
})
export class SicoobComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      codigoManager: ['', Validators.required],
      sigla: ['', Validators.required],
      cedenteConta: ['', Validators.required],
      digitoConta: ['', Validators.required],
      chave: ['', Validators.required],
      agencia: ['', Validators.required],
      seqInicial: ['', Validators.required],
      seqFinal: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados Sicoob:', this.form.value);
    }
  }
}
