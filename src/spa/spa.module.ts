import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpaBodyComponent} from "./spa-body/spa-body.component";
import {SpaHeaderComponent} from './spa-header/spa-header.component';
import {SpaContentComponent} from './spa-content/spa-content.component';
import {SpaFooterComponent} from './spa-footer/spa-footer.component';


@NgModule({
  declarations: [SpaBodyComponent, SpaHeaderComponent, SpaContentComponent, SpaFooterComponent],
  imports: [CommonModule],
  exports: [SpaBodyComponent]
})
export class SpaModule{}
