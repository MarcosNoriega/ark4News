import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNotices() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Respuesta>('https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-18&sortBy=publishedAt&apiKey=');
  }
}
