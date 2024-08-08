import {Component} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDivider} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";

import {FloorComponent} from "../floor/floor.component";
import {Floor} from "../../models/floor.model";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatDivider,
    FormsModule,
    FloorComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  floors: Floor[] = [
    {value: 'floor-0', viewValue: 'Planta 1'},
    {value: 'floor-1', viewValue: 'Planta 2'},
    {value: 'floor-2', viewValue: 'Planta 3'},
  ];

  selectedFloors: Floor = {value: 'floor-0', viewValue: 'Planta 1'};
  constructor() {
  }

  onFloorChange(): void {
    const selectedFloor: Floor | undefined = this.floors.find(floor => floor.value === this.selectedFloors.value);
    this.selectedFloors.viewValue = selectedFloor ? selectedFloor.viewValue : '';
  }

}
