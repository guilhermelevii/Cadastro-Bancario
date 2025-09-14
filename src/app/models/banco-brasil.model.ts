export interface BancoBrasil {
  descricao: string;        // Texto livre
  codigoManager: string;    // Até 6 dígitos
  sigla: string;            // Texto
  numeroConvenio: string;   // 4 dígitos
  eCommerce: string;        // 4 dígitos
  carteira: string;         // 3 dígitos
  variacao: string;         // 2 dígitos
  cedenteConta: string;     // Até 10 dígitos
  digitoConta: string;      // 1 dígito
  agencia: string;          // 4 dígitos
  digitoAgencia: string;    // 1 dígito
}
