import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pacientes } from 'src/assets/models/pacientes.model';
import { MatDialog } from "@angular/material/dialog";
import { PacientesService } from 'src/assets/service/pacientes.service';


@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.component.html',
  styleUrls: ['./prontuarios.component.scss']
})
export class ProntuariosComponent implements OnInit {
  docList: Pacientes[];
  constructor(
    public pacientesService: PacientesService
  ) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.pacientesService.getAllPacientes().subscribe((data) => {
      this.docList = data;
      console.log("DOC LIST: ", this.docList[0]);
    });
  }
}
