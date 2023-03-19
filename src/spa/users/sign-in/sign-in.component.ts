import {Component} from '@angular/core';
import {UserApi} from "../user-api";
import {NgForm} from "@angular/forms";
import {UserService} from "../../../app/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  submitting = false;
  formError: string;

  constructor(private userApi: UserApi, private userService: UserService, private router: Router) { }
  onSubmit(signInForm: NgForm): void {
    if (signInForm.valid) {
      this.submitting = true;
      this.formError = null;
      this.userApi.signIn(signInForm.value.email, signInForm.value.password).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/authenticated']);
      }, (error) => {
        this.submitting = false;
        this.formError = error;
      });
    }
  }
}