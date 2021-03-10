import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  model = new CheckInVehicleCommand();
  errorMessage?: string;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    this.http.post(`http://parking-web-api.azurewebsites.net/api/ParkingTickets`, this.model)
      .subscribe(() => this.router.navigate(['ticket']),
        error => {
          const errorParts = error.error.split('\r\n', 1);
          const exception = errorParts[0];
          const exceptionParts = exception.split(': ', 2);
          const exceptionMessage = exceptionParts[1];
          return this.errorMessage = exceptionMessage;
        });
  }

  clearErrorMessage(): void {
    this.errorMessage = undefined;
  }
}

export class CheckInVehicleCommand implements ICheckInVehicleCommand {
  licensePlate?: string;
  vehicleType?: string;
  engineCapacity?: number;

  constructor(data?: ICheckInVehicleCommand) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
}

export interface ICheckInVehicleCommand {
  licensePlate?: string;
  vehicleType?: string;
  engineCapacity?: number;
}
