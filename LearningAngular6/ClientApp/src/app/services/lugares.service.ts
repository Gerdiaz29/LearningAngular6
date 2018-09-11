import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lugar } from '../Model/lugar.model';

@Injectable()
export class LugaresService {
  //API_ENDPOINT = 'https://platzisquare-81a1f.firebaseio.com';
  API_ENDPOINT = 'api/lugares';
  ItemId: any = null;
  log: any;
  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }

  public getLugares(): Observable<Lugar[]> {
    //return this.afDB.list('lugares/');
    /*return this.http.get(this.API_ENDPOINT + '/.json')
      .pipe(map((result) => {
        const data = result.json().lugares;
        return data;
      }));*/
    /*return this.http.get(this.API_ENDPOINT + '/lugares')
      .pipe(map((result) => {
        const data = result.json().lugares;
        return data;
      }));*/

    //return this.http.get(this.API_ENDPOINT, this.httpOptions)
    //  .subscribe(result => {
    //    const data = result;
    //    return data;
    //  });
    return this.http.get<Lugar[]>(this.API_ENDPOINT).pipe(
      catchError(this.handleError('getLugares', []))
    );
  }

  public getLugar(id: number): Observable<Lugar> {
    //return this.afDB.object('lugares/' + id);
    //return this.http.get<Lugar>(this.API_ENDPOINT + '/' + id, this.httpOptions);
    const url = this.API_ENDPOINT + '/' + id;
    return this.http.get<Lugar>(url).pipe(
      catchError(this.handleError<Lugar>('get lugar id=${id}'))
    );
  }

  public guardarLugar(lugar) {
    //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    //const headers = new Headers({ "Content-Type": "application/json" });

    //var result = this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: headers });
    /*var result = this.https.post(this.API_ENDPOINT+'/lugares', lugar, httpOptions).pipe(
      catchError(console.log('addLugar', lugar))
    );*/

    return this.http.post<Lugar>(this.API_ENDPOINT, lugar, this.httpOptions).pipe(
      catchError(this.handleError('addLugar'))
    );
  }

  public editarLugar(lugar: Lugar): Observable<any> {
    // this.ItemId = this.afDB.database.ref();
    //this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

    return this.http.put<Lugar>(this.API_ENDPOINT, lugar, this.httpOptions).pipe(
      catchError(this.handleError('edit lugar'))
    );
  }

  public obtenerGeoData(direccion) {
    //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
