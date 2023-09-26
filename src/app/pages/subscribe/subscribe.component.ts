import { Component, OnInit } from '@angular/core';
import { dataFakeSubscribe } from 'src/app/data/dataFakeSubscribe';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  contents:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getValuesToComponent()
  }

  getValuesToComponent() {
    const result = dataFakeSubscribe;
    this.setValuesToComponent(result)
  }

  setValuesToComponent(contents:any[]) {
    for (let i = 0; i < contents.length; i++) {
      this.contents.push(contents[i]);
    }
  }

}
