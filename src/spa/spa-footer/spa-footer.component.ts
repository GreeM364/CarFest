import { Component } from '@angular/core';

@Component({
  selector: 'spa-footer',
  templateUrl: './spa-footer.component.html',
  styleUrls: ['./spa-footer.component.css']
})
export class SpaFooterComponent {
  title = 'All rights reserved';
  year = new Date().getFullYear();
}
