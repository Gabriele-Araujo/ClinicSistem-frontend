import { formatDate } from "@angular/common";
export class Prontuarios {
  nome: string;
  cpf: string;
  dataNascimento: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: number;
  cidade: string;
  estado: string;
  primeiraConsulta: string;

  constructor(prontuarios) {
    {
      this.nome = prontuarios.nome || "";
      this.cpf = prontuarios.cpf || "";
      this.dataNascimento = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.cep = prontuarios.cep || "";
      this.rua = prontuarios.rua || "";
      this.bairro = prontuarios.bairro || "";
      this.numero = prontuarios.numero || "";
      this.cidade = prontuarios.cidade || "";
      this.estado = prontuarios.estado || "";
      this.primeiraConsulta = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
    }
  }

}
