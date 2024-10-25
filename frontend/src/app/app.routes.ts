import { Routes } from '@angular/router';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

// we import routes to components here

const routes: Routes = [
    { path: '', component: SubscriptionsComponent },
    { path: 'add-subscription', component: FormComponent },
    { path: 'settings', component: NotificationSettingsComponent },
    { path: 'calendar', component: CalendarComponent }, 
    { path: 'list', component: ListComponent }
  ];

  export default routes;