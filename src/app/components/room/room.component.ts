import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Room} from "../../models/room.model";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {LowerCasePipe} from "@angular/common";

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatCardTitle,
    FormsModule,
    LowerCasePipe
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {

  @Input() roomDetails!: Room;
  @Input() selectedFloor!: string;
  @Output() deleteRoom = new EventEmitter<number>();

  isEditing: boolean = false;

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  removeRoom(): void {
    this.deleteRoom.emit(this.roomDetails.id);
  }
}
