import { formatDate } from "@angular/common";
export class Pacientes {
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

  constructor(pacientes) {
    {
      this.nome = pacientes.nome || "";
      this.cpf = pacientes.cpf || "";
      this.dataNascimento = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.cep = pacientes.cep || "";
      this.rua = pacientes.rua || "";
      this.bairro = pacientes.bairro || "";
      this.numero = pacientes.numero || "";
      this.cidade = pacientes.cidade || "";
      this.estado = pacientes.estado || "";
      this.primeiraConsulta = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
    }
  }

}
