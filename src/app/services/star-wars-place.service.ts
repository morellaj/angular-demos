import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsPlaceService {
  private place$ = new BehaviorSubject<any>(null);
  private placeId$ = new BehaviorSubject<number>(1);

  constructor() {}

  getPlace$(): Observable<any> {
    return this.place$.asObservable();
  }

  setPlace(place: any): void {
    this.place$.next(place);
  }

  getPlaceId$(): Observable<any> {
    return this.placeId$.asObservable();
  }

  iteratePlaceId(): void {
    this.placeId$.next(this.placeId$.value + 1);
  }
}
