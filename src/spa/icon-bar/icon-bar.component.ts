import {Component, OnInit, Input} from '@angular/core';
import {SpaConfigService} from '../service/spa-config.service';
import {UserApi} from "../users/user-api";
@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  @Input() showIcons: any;
  showLoader: boolean;
  userInfo: string;
  constructor(public spaConfigService: SpaConfigService, private userApi: UserApi) { }

  ngOnInit() {
    this.showLoader = false;
    this.userInfo = JSON.parse(localStorage.getItem('user')).name;
  }
  signOut() {
    this.showLoader = true;
    setTimeout(() => { this.userApi.signOut(); }, 2000);
    console.log('Sign out');
  }
}
