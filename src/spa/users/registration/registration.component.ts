import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../app/services/user.service";
import {visibility} from "../../service/animations";

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [visibility]
})
export class RegistrationComponent {
  registering = false;
  hasAdded = false;
  formError: string;
  constructor(private router: Router, private userService: UserService) { }
  onSubmit(registerForm: NgForm) {
    this.registering = true;
    this.userService.registerUser(registerForm.value).subscribe(() => {
      setTimeout(() => { this.hasAdded = true; }, 1200);
      setTimeout(() => { this.router.navigate(['/sign-in']); }, 2000);
    })
  }
}
