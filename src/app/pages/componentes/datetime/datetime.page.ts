import {Component, OnInit, ViewChild} from '@angular/core';
import {IonDatetime} from "@ionic/angular";

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';
  constructor() { }

  ngOnInit() {
  }

  confirm() {
    this.datetime.confirm();
  }

  reset() {
    this.datetime.reset();
  }
}
