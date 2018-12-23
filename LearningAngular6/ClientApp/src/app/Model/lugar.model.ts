import { StaticInjector } from "@angular/core/src/di/injector";

export class Lugar {
  id: number;
  nombre: string;
  calle: string;
  cercania: number;
  ciudad: string;
  descripcion: string;
  distancia: number;
  lat: number;
  lng: number;
  pais: string;
  plan: string;
  fechaDeCreacion: Date;
  fechaDeActualizacion: Date;
}
