import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import MapboxComponent from '../../components/mapbox/mapbox.component';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [RouterModule, MapboxComponent],
  templateUrl: './update-client.component.html',
  styles: ``
})
export default class UpdateClientComponent {

}
