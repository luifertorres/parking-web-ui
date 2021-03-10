import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'ticket', component: TicketComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: '', redirectTo: '/ticket', pathMatch: 'full' },
  { path: '**', redirectTo: '/ticket' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
