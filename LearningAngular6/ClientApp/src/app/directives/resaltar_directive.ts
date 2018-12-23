import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {

  formatNumber: any = {
    separador: ".",
    sepDecimal: ',', formatear: function (num) {
      num += '';
      var splitStr = num.split('.');
      var splitLeft = splitStr[0];
      var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
      var regx = /(\d+)(\d{3})/;
      while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
      }
      return this.simbol + splitLeft + splitRight;
    },
    new: function (num, simbol) {
      this.simbol = simbol || '';
      return this.formatear(num);
    }
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // tslint:disable-next-line:no-input-rename
  @Input('appResaltar') distanciaStr: number;

  ngOnInit() {

    var values = this.formatNumber.new(this.distanciaStr);
    //if (this.distanciaStr) {
    var value = this.distanciaStr;
    
    // this.renderer.setValue(this.elRef.nativeElement, value.toString());
    debugger;

    if (value > 18 ) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }

  }

}

