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

  }
}
