import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProntuariosService {

  private API_URL = "https://localhost:5001/";
  constructor(private httpClient: HttpClient) {}
}
