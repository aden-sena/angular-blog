import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { dataFakeArticle } from 'src/app/data/dataFakeArticle';

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
  article:string = "";
  private id:string | null = "";

  constructor(
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
    this.toTopPage()
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article =>  article.id == id)[0]
    const article = dataFakeArticle.filter(article => article.id == id)[0]

    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.autor = result.autor;
    this.data = result.data;
    this.article = article.article;
  }

  toTopPage() {
    window.scroll(0, 0)
  }
}
