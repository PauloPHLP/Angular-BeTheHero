import { Component } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent {
  logoPath = "./../../assets/logo.svg";
  heroes = "../.../../assets/heroes.png";
  faSignInAlt = faSignInAlt;
}