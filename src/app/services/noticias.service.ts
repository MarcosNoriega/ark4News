import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuesta } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

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

  constructor(private http: HttpClient) { }


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
}
