import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contents:any[] = []

  constructor() { }

  ngOnInit(): void {
    this.getValuesToComponent()
  }

  getValuesToComponent () {
    const result = dataFake
    this.setValuesToComponent(result)
  }

  setValuesToComponent (content: any) {
    for (let i = 0; i < content.length; i++) {
      this.contents.unshift(content[i]);
    }
  }

}
