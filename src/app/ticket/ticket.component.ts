import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  tickets?: ParkingTicketDto[];

  constructor(private http: HttpClient) {
    http.get<IParkingTicketDto[]>(`http://parking-web-api.azurewebsites.net/api/ParkingTickets`)
      .subscribe(response => this.tickets = response);
  }
}

export class ParkingTicketDto implements IParkingTicketDto {
  id?: number;
  vehicleType?: string;
  licensePlate?: string;
  engineCapacity?: number;
  checkIn?: string;
}

export interface IParkingTicketDto {
  id?: number;
  vehicleType?: string;
  licensePlate?: string;
  engineCapacity?: number;
  checkIn?: string;
}
