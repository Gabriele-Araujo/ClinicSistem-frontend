import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { GerenciadorComponent } from '../../pages/gerenciador/gerenciador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProntuariosComponent } from 'src/app/pages/prontuarios/prontuarios.component';
import { AgendaComponent } from 'src/app/pages/agenda/agenda.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    AgendaComponent,
    ProntuariosComponent,
    UserProfileComponent,
    GerenciadorComponent,
    IconsComponent
  ]
})

export class AdminLayoutModule {}
