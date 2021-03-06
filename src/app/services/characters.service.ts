import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeStamp, publicKey, hash } from './marvelApiConfig';

@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}
  fetchCharacters(): Observable<any> {
    return this.http.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
  }
}
