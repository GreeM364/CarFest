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
import {MenuService} from "./service/menu.service";
import {MenuComponent} from './menus/menu/menu.component';
import {MenuItemComponent} from './menus/menu-item/menu-item.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PopupMenuComponent} from './menus/popup-menu/popup-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInComponent} from './users/sign-in/sign-in.component';
import {RegistrationComponent} from './users/registration/registration.component';
import {DynamicFieldComponent} from './dynamicForms/dynamic-field/dynamic-field.component';
import {DynamicFormComponent} from './dynamicForms/dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [SpaBodyComponent, SpaHeaderComponent, SpaContentComponent, SpaFooterComponent, IconBarComponent, ScreenLargeDirective,
    ScreenSmallDirective, MenuComponent, MenuItemComponent, PopupMenuComponent, SignInComponent, RegistrationComponent,
    DynamicFieldComponent, DynamicFormComponent],
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink, RouterLinkActive, BrowserAnimationsModule, ReactiveFormsModule],
  exports: [SpaBodyComponent, DynamicFormComponent],
  providers: [SpaConfigService, SpaConfigService, MenuService]
})
export class SpaModule{}
