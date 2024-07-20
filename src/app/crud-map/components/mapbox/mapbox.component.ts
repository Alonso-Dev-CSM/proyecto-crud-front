import { RouterModule } from '@angular/router';
import { AfterViewInit, Component, ElementRef, Injectable, ViewChild } from '@angular/core';

import { Map, Popup, Marker, LngLatLike } from 'mapbox-gl'
import { HttpClient } from '@angular/common/http';
import { MapboxService, PlacesService } from '../../services';


@Component({
  selector: 'app-mapbox',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './mapbox.component.html',
  styles: ``
})


export default class MapboxComponent implements AfterViewInit{


  constructor ( 
    private placesService: PlacesService,
    private mapboxService: MapboxService
  ){}


  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

  

  setMap( map: Map){
    this.map = map
  }

  flyTo( coords: LngLatLike ){
    if(!this.mapboxService.isMapReady) throw Error('El mapa no esta inicializado')

      this.map.flyTo({
        center: coords,
        zoom: 13
      })
  }
  map = new Map({
    container: this.divmap?.nativeElement, // container ID
    center: this.placesService.useLocation,
    zoom: 13
  });


  @ViewChild('map') divmap?: ElementRef;

  async ngAfterViewInit(): Promise<void> {

    if( !this.divmap ) throw 'Elemento HTML no encontrado';

    

    let http = HttpClient;
    this.placesService = new PlacesService();
    await this.placesService.getUserLocation();
    console.log(this.placesService.useLocation)
  

    const popup = new Popup()
      .setHTML(`
          <h6>Aqui estoy<h6/>
          <span>Estoy en este lugar del mundo<span/>
      `)

      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

      new Marker({color: color})
        .setLngLat(this.placesService.useLocation)
        .setPopup( popup )
        .addTo(this.map)

      this.setMap(this.map)

  }
 
}
