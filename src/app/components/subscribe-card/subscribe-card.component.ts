import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-card',
  templateUrl: './subscribe-card.component.html',
  styleUrls: ['./subscribe-card.component.css']
})
export class SubscribeCardComponent implements OnInit {
  @Input()
  photo:string = "";
  @Input()
  title:string = "";
  @Input()
  desc:string = "";
  @Input()
  price:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
