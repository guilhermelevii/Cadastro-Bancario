export interface Sicoob {
  descricao: string;        // Texto livre
  codigoManager: string;    // Até 6 dígitos, pode ter zeros
  sigla: string;            // Texto
  cedenteConta: string;     // Até 10 dígitos, pode começar com zero
  digitoConta: string;      // 1 dígito
  chave: string;            // Texto
  agencia: string;          // 4 dígitos
  seqInicial: string;       // 7 dígitos
  seqFinal: string;         // 7 dígitos
}
