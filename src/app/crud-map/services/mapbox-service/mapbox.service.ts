import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import Map from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  map?: mapboxgl.Map;

  get isMapReady(){
    return !!!this.map
    
  }



  constructor() {

  Map.accessToken = environment.mapbox_key;

  }
  buildMap() {

    }
}
