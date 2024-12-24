import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive(
    {
        selector:'[setBackGroundColor]'
    }
)
export class SetBackGroundColor implements OnInit{
    // private renderer: Renderer2;
    constructor(private element:ElementRef, private renderer: Renderer2) {
        // this.renderer = renderer;
    }
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white'
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }
}