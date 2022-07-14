import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GHIBLI_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GhibliApiService {

  constructor( private httpClient: HttpClient ) { }

  getAllFilms() {
    return this.httpClient.get<any[]>(`${GHIBLI_API}/films`);
  }

}
