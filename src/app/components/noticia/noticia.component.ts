import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatosLocalService } from 'src/app/services/datos-local.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;
  @Input() enFavoritos: boolean;

  constructor(private iab: InAppBrowser,
              private actionSheet: ActionSheetController,
              private socialSharing: SocialSharing,
              private datoslocal: DatosLocalService) { }

  ngOnInit() {

  }

    abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

    async lanzarMenu() {
        let btnFavorito = {};

        if (this.enFavoritos) {
          btnFavorito = {
            text: 'Borrar de Favoritos',
            icon: 'trash',
            handler: () => {
              // console.log('Favorito clicked');
              this.datoslocal.borrarFavoritos(this.noticia);
            }
          };
        } else {
          btnFavorito = {
            text: 'Favorito',
            icon: 'star',
            handler: () => {
              // console.log('Favorito clicked');
              this.datoslocal.guardarNoticia(this.noticia);
            }
          };
        }

        const actionSheet = await this.actionSheet.create({
        buttons: [{
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            // console.log('Share clicked');
            this.socialSharing.share(this.noticia.title, this.noticia.source.name, '', this.noticia.url);
          }
        }, btnFavorito,
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }]
      });
        await actionSheet.present();
    }

}
