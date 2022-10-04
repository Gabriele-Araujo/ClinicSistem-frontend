import { Component, OnInit } from '@angular/core';
import { Pacientes } from 'src/assets/models/pacientes.model';
import { PacientesService } from 'src/assets/service/pacientes.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PacienteComponent } from './paciente/paciente.component';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.component.html',
  styleUrls: ['./prontuarios.component.scss'],
  providers: [PacientesService,
    {
    provide: MatDialogRef,
    useValue: {}
    }
  ]
})
export class ProntuariosComponent {
  docList: Pacientes[];
  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.pacientesService.getAllPacientes().subscribe((data) => {
      this.docList = data;
    });
  }

  newPaciente() {
    this.dialog.open(PacienteComponent, {});
  }
}
