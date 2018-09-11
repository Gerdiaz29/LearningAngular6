import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../Model/lugar.model';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  lat = 10.2134704;
  lng = -67.8741502;
  lugares: Lugar[];

  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares();
  }

  ngOnInit() {
    this.getLugares();
  }

  getLugares(): void {
    this.lugaresService.getLugares().subscribe(lugares => this.lugares = lugares);
  }
}
