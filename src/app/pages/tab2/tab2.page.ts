import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article, Categoria } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categorias: Categoria[] = [{en: 'business', es: 'negocios'},
                             {en: 'entertainment', es: 'entretenimiento'},
                            {en: 'general', es: 'general'}, {en: 'health', es: 'salud'},
                            {en: 'science', es: 'ciencia'}, {en: 'sports', es: 'deportes'},
                             {en: 'technology', es: 'tecnología'}];
  articles: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.segment.value = this.categorias[0].en;

    this.buscarCategoria(this.categorias[0].en);
  }

  cambioCategoria(event) {
    this.articles = [];
    this.buscarCategoria(event.detail.value);
  }

  loadData(event) {
    this.buscarCategoria(this.segment.value, event);
  }

  buscarCategoria(categoria: string, event?) {
    this.noticiasService.getCategoria(categoria).subscribe(res => {
      console.log(res);

      if (res.articles.length === 0) {
        event.target.complete();
        return;
      }

      this.articles.push(...res.articles);
    });

    if (event) {
      event.target.complete();
    }
  }
}
