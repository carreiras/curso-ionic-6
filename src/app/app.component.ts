import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Accordion', url: 'accordion', icon: 'cube' },
    { title: 'Action Sheet', url: 'actionsheet', icon: 'cube' },
    { title: 'Alert', url: 'alert', icon: 'cube' },
    { title: 'Button', url: 'button', icon: 'cube' },
    { title: 'Card', url: 'card', icon: 'cube' },
    { title: 'Datetime', url: 'datetime', icon: 'cube' },
    { title: 'Components - Js', url: 'js', icon: 'cube' },
    { title: 'Components - Tags', url: 'tags', icon: 'cube' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
