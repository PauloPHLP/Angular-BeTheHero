import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogonComponent } from '../app/logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';

const routes = [
  { path: '', component: LogonComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'incidents', component: ProfileComponent },
  { path: 'incidents/new', component: NewIncidentComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {};