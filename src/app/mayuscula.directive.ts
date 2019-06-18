import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mayuscula]',
  host: {
    '(input)': 'convertirAMayusculas($event.target.value)',
  }
})
export class MayusculaDirective {

  constructor(private el: ElementRef) { 
  }

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  @HostListener('keyUp') onKeyUp() {
    console.log("directiva");
  }

  convertirAMayusculas(value: any) {
    console.log(value);
    this.el.nativeElement.value = value.toUpperCase(); 
  }

}
