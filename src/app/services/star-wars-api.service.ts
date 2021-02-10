import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  constructor(private http: HttpClient) {}

  public getPerson(id: number): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }

  public getPlace(id: number): Observable<any> {
    return this.http.get(`https://swapi.dev/api/planets/${id}`);
  }
}
