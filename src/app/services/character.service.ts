import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeStamp, publicKey, hash } from './marvelApiConfig';

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) {}
  fetchCharacter = (id: string) => {
    return this.http.get(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );
  };
}
