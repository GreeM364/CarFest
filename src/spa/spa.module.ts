import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpaBodyComponent} from "./spa-body/spa-body.component";
import {SpaHeaderComponent} from './spa-header/spa-header.component';
import {SpaContentComponent} from './spa-content/spa-content.component';
import {SpaFooterComponent} from './spa-footer/spa-footer.component';
import {SpaConfigService} from "./service/spa-config.service";
import {IconBarComponent} from './icon-bar/icon-bar.component';
import {ScreenLargeDirective} from "./directive/screen-large.directive";
import {ScreenSmallDirective} from "./directive/screen-small.directive";


@NgModule({
  declarations: [SpaBodyComponent, SpaHeaderComponent, SpaContentComponent, SpaFooterComponent, IconBarComponent, ScreenLargeDirective,
                 ScreenSmallDirective],
  imports: [CommonModule],
  exports: [SpaBodyComponent],
  providers: [SpaConfigService, SpaConfigService]
})
export class SpaModule{}
