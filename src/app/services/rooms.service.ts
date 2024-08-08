import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Room} from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private rooms: Room[] = [
    { id: 1, name: 'Room 101', maxCapacity: 30, occupancy: 40 },
    { id: 2, name: 'Room 102', maxCapacity: 20, occupancy: 50 },
    { id: 3, name: 'Room 103', maxCapacity: 15, occupancy: 70 },
    { id: 4, name: 'Room 104', maxCapacity: 25, occupancy: 30 },
    { id: 5, name: 'Room 105', maxCapacity: 10, occupancy: 90 }
  ];

  constructor() {
  }

  getRooms(floorValue: string): Observable<Room[]> {
    console.log(floorValue);
    return of(this.rooms);
  }

}
