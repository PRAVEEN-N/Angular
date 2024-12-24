import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.background')
  backGroundColor:string = '#28282B';

  @HostBinding('style.border')
  border:string = 'none';

  @HostBinding('style.color')
  color:string = 'white';

  @HostListener('mouseenter')
  OnMouseEnter() {
    this.backGroundColor = 'white';
    this.border = '#28282B 3px solid';
    this.color = '#28282B'
  }

  @HostListener('mouseout')
  OnMouseOut() {
    this.backGroundColor = '#28282B';
    this.border = 'none';
    this.color = 'white';
  }


}
