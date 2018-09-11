import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // tslint:disable-next-line:no-input-rename
  @Input('appResaltar') mayoriaDeEdad: number;
  ngOnInit() {
  if (this.mayoriaDeEdad > 18 ) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
  }
  }
}
