import { Component } from '@angular/core';
import { Apartment } from '../../core/models/Apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: false, surfaceterrace: 0, category: "T2", ResidenceId: 1 },
    { apartNum: 102, floorNum: 2, surface: 70, terrace: true, surfaceterrace: 10, category: "T3", ResidenceId: 2 }
  ];
}
