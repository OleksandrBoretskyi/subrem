
import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
  standalone: true,
  imports: [
    ListComponent
  ]
})
export class SubscriptionsComponent {
  viewDate: Date = new Date();
}
