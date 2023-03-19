import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../app/services/user.service";

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registering = false;
  hasAdded = false;
  formError: string;
  constructor(private router: Router, private userService: UserService) { }
  onSubmit(registerForm: NgForm) {

  }
}
