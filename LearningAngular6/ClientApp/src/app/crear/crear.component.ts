import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lugar } from '../Model/lugar.model';

@Component({
  selector: 'app-crear',
  templateUrl: 'crear.component.html'
})
export class CrearComponent {

  lugar: Lugar;
  id: any;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.id != "new") {
      //this.lugaresService.getLugar(this.id)
      //  .valueChanges().subscribe((lugar) => {
      //    this.lugar = lugar;
      //  })
      this.getLugar();
    }
  }

  getLugar(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.lugaresService.getLugar(this.id)
      .subscribe(
        (lugar) => this.lugar = lugar);
  }

  guardarLugar(): void {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugar.lat = 0;
    this.lugar.lng = 1;

    if (this.id != "new") {
      this.lugaresService.editarLugar(this.lugar).subscribe(() => alert('Lugar actualizado'));
    }
    else {
      this.lugaresService.guardarLugar(this.lugar).subscribe();
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
