import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { GerenciadorComponent } from '../../pages/gerenciador/gerenciador.component';
import { ProntuariosComponent } from 'src/app/pages/prontuarios/prontuarios.component';
import { AgendaComponent } from 'src/app/pages/agenda/agenda.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'gerenciador',    component: GerenciadorComponent },
    { path: 'prontuarios',    component: ProntuariosComponent },
    { path: 'agenda',    component: AgendaComponent },
    { path: 'icons',          component: IconsComponent }
  ];
