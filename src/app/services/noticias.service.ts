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

  constructor(private http: HttpClient) { }


  private getQuery(query: string) {
    query = apiUrl + query;

    return this.http.get<Respuesta>(query, {headers});
  }

  getNotices() {
    return this.getQuery('/top-headlines?country=us');

  }

  getCategoria(categoria: string) {
    return this.getQuery(`/top-headlines?country=us&category=${categoria}`);
  }
}
