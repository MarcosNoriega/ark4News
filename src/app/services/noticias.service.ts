import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuesta } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

const apikey = environment.apikey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-Key': apikey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  page = 0;
  pageCategoria = 0;
  categoriaActual = '';
  loading: any;

  constructor(private http: HttpClient, private loadingCtrol: LoadingController) { }


  private getQuery(query: string) {
    query = apiUrl + query;

    return this.http.get<Respuesta>(query, {headers});
  }

  getNotices() {
    this.page++;
    return this.getQuery(`/top-headlines?country=ar&page=${this.page}`);
  }

  getCategoria(categoria: string) {
    if (categoria === this.categoriaActual) {
      this.pageCategoria++;
    } else {
      this.pageCategoria = 1;
      this.categoriaActual = categoria;
    }
    return this.getQuery(`/top-headlines?country=ar&category=${categoria}&page=${this.pageCategoria}`);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrol.create({
      message: 'Espere...',
      spinner: 'crescent',
    });
    return this.loading.present();
  }

  dissmisLoading() {
    this.loading.dismiss();
  }
}
