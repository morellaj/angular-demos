import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StarWarsApiService } from 'src/app/services/star-wars-api.service';
import { StarWarsPlaceService } from 'src/app/services/star-wars-place.service';

@Injectable({
  providedIn: 'any',
})
export class SomePageViewModel {
  private _person$ = new BehaviorSubject<any>(null);
  private _personId$ = new BehaviorSubject<any>(null);

  constructor(
    private starWarsApi: StarWarsApiService,
    private globalState: StarWarsPlaceService
  ) {}

  get person$(): Observable<any> {
    return this._person$.asObservable();
  }

  get place$(): Observable<any> {
    return this.globalState.getPlace$();
  }

  get personId$(): Observable<any> {
    return this._personId$.asObservable();
  }

  get placeId$(): Observable<any> {
    return this.globalState.getPlaceId$();
  }

  getPerson(id: number): void {
    this.starWarsApi
      .getPerson(id)
      .subscribe((person) => this._person$.next(person));
  }

  getPlace(id: number): void {
    this.starWarsApi
      .getPlace(id)
      .subscribe((place) => this.globalState.setPlace(place));
  }

  iteratePersonId(): void {
    this._personId$.next(this._personId$.value + 1);
  }

  iteratePlaceId(): void {
    this.globalState.iteratePlaceId();
  }
}
