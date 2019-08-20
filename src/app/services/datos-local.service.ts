import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatosLocalService {

  Articles: Article[] = [];

  constructor(private storage: Storage, public toastController: ToastController) {
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const exist = this.Articles.find(noti => noti.title === noticia.title);

    if (!exist) {
      this.Articles.unshift(noticia);
      this.storage.set('favoritos', this.Articles);

      this.presentToast('Se ha guardado a favoritos');

    }

  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');

    if (favoritos) {
      this.Articles = favoritos;

    }

  }

  borrarFavoritos(noticia: Article) {
    this.Articles = this.Articles.filter(noty => noty.title !== noticia.title);
    this.storage.set('favoritos', this.Articles);

    this.presentToast('Se ha quitado de favoritos');
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
