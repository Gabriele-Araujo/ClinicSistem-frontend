import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Pacientes } from "../models/pacientes.model";

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private API_URL = "https://localhost:5001/";
  constructor(private httpClient: HttpClient) {}

  getAllPacientes(): Observable<any> {
    return this.httpClient.get<Pacientes[]>(this.API_URL + 'paciente');
  }
}

