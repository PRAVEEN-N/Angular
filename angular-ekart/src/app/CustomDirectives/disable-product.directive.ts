import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableProductDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @Input() set disableProduct(disable: Boolean) { // if set placed before property then it can used as method value is paased to it as argument
    if(disable) {
      this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
    }
  }
}
