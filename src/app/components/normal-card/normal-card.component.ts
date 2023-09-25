import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  styleUrls: ['./normal-card.component.css']
})
export class NormalCardComponent implements OnInit {

  constructor() { }
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  autor:string = "";
  @Input()
  data:string = "";

  ngOnInit(): void {
  }

}
