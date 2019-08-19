import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categorias: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  articles: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.segment.value = this.categorias[0];

    this.buscarCategoria(this.categorias[0]);
  }

  cambioCategoria(event) {
    this.articles = [];
    this.buscarCategoria(event.detail.value);
  }

  buscarCategoria(categoria: string) {
    this.noticiasService.getCategoria(categoria).subscribe(res => {
      console.log(res);
      this.articles.push(...res.articles);
    });
  }
}
