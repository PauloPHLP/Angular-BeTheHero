import { Component, OnInit } from '@angular/core';
import { faPowerOff, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  logoPath = "./../../assets/logo.svg";
  faPowerOff = faPowerOff;
  faTrash = faTrash;
}