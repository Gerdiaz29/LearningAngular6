import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'li[appContarClicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  @HostBinding('style.opacity') opacity = .1;
  @HostListener('click', ['$event.target']) onclick(btn) {
    console.log('a', btn, 'Numero de clicks:', this.clickN++);
    this.opacity += .1;
  }
}
