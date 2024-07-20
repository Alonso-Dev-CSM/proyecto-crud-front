import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation!: [ number, number ];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor( private http?: HttpClient) { 
    
  }

  public async getUserLocation(): Promise<[number, number]>{

    return new Promise( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ( {coords} ) => {
          this.useLocation = [ coords.longitude, coords.latitude ];
          resolve( this.useLocation )
        },
        ( err ) => {
          alert(`No se pudo obtener la geolocalización`);
          console.log(err);
          reject();
        }
      )
    })

  }

  public getPostCode( postCode: string ){
    if(!this.http) throw Error ('Http not Found')
    this.http.get(`https://api.mapbox.com/search/geocode/v6/forward?postcode=${postCode}&proximity=${this.useLocation}&access_token=${environment.mapbox_key}`)
      .subscribe( console.log);
  }

}
