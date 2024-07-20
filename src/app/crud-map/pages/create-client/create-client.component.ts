import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

// import { MapboxService, PlacesService } from '../../services';
import MapboxComponent from '../../components/mapbox/mapbox.component';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './create-client.component.html',
  styles: '',
})
export default class CreateClientComponent {

  // constructor( 
  //   private placesService: PlacesService,
  //   private mapboxService: MapboxService,
  //   private mapbox: MapboxComponent
  // ){}

  // private debounceTimer?: NodeJS.Timeout


  // searchPostCode(postalCode: string = ''){
  //   if( this.debounceTimer ) clearTimeout( this.debounceTimer )

  //     this.debounceTimer = setTimeout(() => {
  //       this.placesService.getPostCode(postalCode)
  //     }, 500)
  
  // }

  // showPostCode( postalCode: string ){
  //   if(!this.placesService.isUserLocationReady) throw Error('No hay ubicación de usuario');
  //   if(!this.mapboxService.isMapReady) throw Error('No hay mapa disponible')

  //   this.mapbox.flyTo(this.placesService.getPostCode(postalCode)!)
  // }
}
