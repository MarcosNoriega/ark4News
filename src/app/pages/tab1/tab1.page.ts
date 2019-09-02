import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  articles: Article[] = [];
  sinConexion: boolean;

  constructor(private noticiasService: NoticiasService, private network: Network) {}

  ngOnInit() {
    this.noticiasService.presentLoading();
    this.cargarNoticias();

    const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });
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

      // console.log(res.articles);
      this.articles.push(...res.articles);
      this.noticiasService.dissmisLoading();
    });

    if (event) {
      event.target.complete();
    }
  }

}
