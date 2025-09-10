import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-banco-brasil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatFormFieldModule,       
    MatSelectModule, MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './banco-brasil.html',
  styleUrls: ['./banco-brasil.css']
})
export class BancoBrasilComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      codigoManager: ['', Validators.required],
      sigla: ['', Validators.required],
      numeroConvenio: ['', Validators.required],
      eCommerce: ['', Validators.required],
      carteira: ['', Validators.required],
      variacao: ['', Validators.required],
      cedenteConta: ['', Validators.required],
      digitoConta: ['', Validators.required],
      agencia: ['', Validators.required],
      digitoAgencia: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados Banco do Brasil:', this.form.value);
    }
  }
}
