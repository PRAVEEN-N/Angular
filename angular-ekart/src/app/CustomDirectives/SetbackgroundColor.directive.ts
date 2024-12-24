import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive(
    {
        selector:'[setBackGroundColor]'
    }
)
export class SetBackGroundColor implements OnInit{
    constructor(private element:ElementRef) {

    }
    ngOnInit(): void {
        this.element.nativeElement.style.background = '#36454F';
        this.element.nativeElement.style.color = 'white'
    }
}