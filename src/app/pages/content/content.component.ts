import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "";
  contentTitle:string = "";
  autor:string = "";
  data:string = "";
  private id:string | null = "";

  constructor(
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article =>  article.id == id)[0]
    console.log(result)

    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.autor = result.autor;
    this.data = result.data;
  }
}