
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  subscriptions = [
    { name: 'Netflix', nextPayment: new Date(), isUrgent: true },
    { name: 'Spotify', nextPayment: new Date(), isUrgent: false }
  ]; // Example subscription data

  markAsDone(subscription: any) {
    console.log('Marked as done:', subscription);
  }
}
