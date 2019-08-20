import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  articles: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this.noticiasService.getNotices().subscribe(res => {

      if (res.articles.length === 0) {
        event.target.complete();
        event.target.disabled = true;
        return;
      }

      console.log(res.articles);
      this.articles.push(...res.articles);
    });

    if (event) {
      event.target.complete();
    }
  }

}
