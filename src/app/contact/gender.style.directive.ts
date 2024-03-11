import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGenderStyle]'
})
export class GenderStyleDirective implements OnInit {
  @Input('appGenderStyle') gender: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.gender === 'Male') {
      this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
      this.elementRef.nativeElement.style.color = 'darkblue';
    } else if (this.gender === 'Female') {
      this.elementRef.nativeElement.style.backgroundColor = 'lightpink';
      this.elementRef.nativeElement.style.color = 'hotpink';
    }
  }
}
