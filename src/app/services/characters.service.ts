import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError, share } from 'rxjs/operators';
import md5 from 'md5';
import { Observable } from 'rxjs';

const date = new Date();
const timeStamp = date.getTime().toString();
const privateKey = 'e44c3a8e9faac2b86ef1edcbf178e02a55a495e5';
const publicKey = 'bb762c2dbfa1c3304c3f0c443da71d49';
const hash = md5(timeStamp + privateKey + publicKey);
@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}
  fetchCharacters(): Observable<any> {
    return this.http.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
  }
}
