import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive(
    {
        selector:'[setBackGroundColor]'
    }
)
export class SetBackGroundColor implements OnInit{

    // @Input() backColor: string = '#36454F';
    // @Input('textColor') color: string = 'white';

    @Input()
    setBackGroundColor ={backColor: '#36454F', color: 'white'}; // Setting multiple values using object
    // private renderer: Renderer2;
    constructor(private element:ElementRef, private renderer: Renderer2) {
        // this.renderer = renderer;
    }
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white'
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.setBackGroundColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.setBackGroundColor.color);
    }
}