import { Component, OnInit, Input } from '@angular/core';
import { LugaresService } from './../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { Lugar } from '../Model/lugar.model';
import { NumberFormatStyle, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: 'crear.component.html'
})
export class CrearComponent implements OnInit {
  id: any;
  lugar: Lugar = new Lugar();
  number: string;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id != "new") {
      //this.lugaresService.getLugar(this.id)
      //  .valueChanges().subscribe((lugar) => {
      //    this.lugar = lugar;
      //  })
      this.getLugar();
    }
  }

  getLugar(): void {
    this.lugaresService.getLugar(this.id)
      .subscribe(
        (lugar) => {
          this.lugar = lugar;
          this.number = this.lugar.distancia.toLocaleString('es-US', { style:"decimal", useGrouping: true });
          this.lugar.cercania.toLocaleString('es-ES');
        });
  }

  guardarLugar(): void {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugar.lat = 0;
    this.lugar.lng = 1;

    if (this.id != "new") {
      this.lugar.fechaDeActualizacion = new Date();
      this.lugaresService.editarLugar(this.lugar).subscribe(() => alert('Lugar actualizado'));
    }
    else {
      this.lugar.fechaDeCreacion = new Date();
      this.lugaresService.guardarLugar(this.lugar).subscribe(() => alert('Lugar creado: ' + this.lugar.nombre));
    }

    // this.lugar = {};
    /*this.lugaresService.obtenerGeoData(direccion)
      .subscribe((result) => {
        this.lugar.lat = result.json().results[0].geometry.location.lat;
        this.lugar.lng = result.json().results[0].geometry.location.lng;
        if (this.id != "new") {
          this.lugaresService.editarLugar(this.lugar);
          alert('Negocio editado con Exito!');

        } else {
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar).subscribe(error => { console.log(error); });
          alert('Negocio guardado con Exito!');
        }
        this.lugar = {};
      })*/
  }

}
