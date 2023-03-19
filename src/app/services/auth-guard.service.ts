import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private userService: UserService) {}
  canActivate(): boolean {
    if (!this.userService.isAuthenticated) {
      this.router.navigate(['./sign-in']);
    }
    return this.userService.isAuthenticated;
  }

  canActivateChild() {
    return this.canActivate();
  }
}
