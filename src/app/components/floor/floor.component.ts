import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

import {RoomComponent} from "../room/room.component";
import {Room} from "../../models/room.model";
import {RoomsService} from "../../services/rooms.service";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [
    MatCardModule,
    RoomComponent,
    MatButton,
    MatSelect,
    MatOption,
    MatFormField,
    FormsModule,
    MatInput
  ],
  templateUrl: './floor.component.html',
  styleUrl: './floor.component.scss'
})
export class FloorComponent implements OnInit, OnChanges {

  @Input() selectedFloor!: string;

  rooms: Room[] = [];
  filteredRooms: Room[] = [];

  minCapacity: number | undefined;
  occupancy: number | undefined;
  occupancyOptions:number[] = [0, 25, 50, 75, 100];

  constructor(private roomsService: RoomsService) {
  }

  ngOnInit(): void {
    this.loadRooms();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFloor']) {
      this.loadRooms();
    }
  }

  loadRooms(): void {
    this.roomsService.getRooms(this.selectedFloor).subscribe((data) => {
      this.rooms = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredRooms = this.rooms.filter(room => {
      const capacityMatches = this.minCapacity === undefined || room.maxCapacity === this.minCapacity;
      const occupancyMatches = this.occupancy === undefined || room.occupancy >= this.occupancy;
      return capacityMatches && occupancyMatches;
    });
  }

  resetFilters(): void {
    this.minCapacity = undefined;
    this.occupancy = undefined;
    this.applyFilters();
  }

  addRoom(): void {
    const newRoom: Room = {
      id: Date.now(),
      name: `Sala ${this.rooms.length + 1}`,
      maxCapacity: Math.floor(Math.random() * 100) + 1,
      occupancy: Math.floor(Math.random() * 101)
    };

    this.rooms.push(newRoom);
    this.applyFilters();
  }

  removeRoom(roomId: number): void {
    this.rooms = this.rooms.filter(room => room.id !== roomId);
    this.applyFilters();
  }


}
