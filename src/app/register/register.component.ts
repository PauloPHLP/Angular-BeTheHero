import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  logoPath = "./../../assets/logo.svg";
  faArrowLeft = faArrowLeft;

  onSubmit(submittedForm) {
    const data = {...submittedForm.value};

    console.log(data);
  }
}