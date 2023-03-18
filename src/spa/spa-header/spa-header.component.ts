import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../service/screen.service';

@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.css']
})
export class SpaHeaderComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
