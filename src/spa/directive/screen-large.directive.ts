import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { ScreenService } from "../service/screen.service";

@Directive({
  selector: "[screenLarge]"
})

export class ScreenLargeDirective {
  private hasView = false;
  constructor(private template: TemplateRef<Object>,
              private screenService: ScreenService,
              private viewContainer: ViewContainerRef) {
    screenService.resize$.subscribe(() => {
      this.onResize();
    })
  }
  onResize() {
    this.screenLarge = false;
  }
  @Input()
  set screenLarge(condition: any) {
    condition = this.screenService.screenWidth >= this.screenService.largePixels;
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
}
