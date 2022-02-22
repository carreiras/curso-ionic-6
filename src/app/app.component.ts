import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Ion-Button', url: 'button', icon: 'radio-button-on' },
    { title: 'Card', url: 'card', icon: 'card' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
