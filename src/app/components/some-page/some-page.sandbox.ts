import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsApiService } from 'src/app/services/star-wars-api.service';
import { StarWarsPlaceService } from 'src/app/services/star-wars-place.service';
import { SomePageState } from './some-page.state';

interface ISomePageSandbox {
  person$: Observable<any>;
  place$: Observable<any>;
  personId$: Observable<any>;
  placeId$: Observable<any>;
  getPerson: (id: number) => void;
  getPlace: (id: number) => void;
  iteratePersonId: () => void;
  iteratePlaceId: () => void;
}

@Injectable({
  providedIn: 'any',
})
export class SomePageSandbox implements ISomePageSandbox {
  constructor(
    private starWarsApi: StarWarsApiService,
    private localState: SomePageState,
    private globalState: StarWarsPlaceService
  ) {}

  get person$(): Observable<any> {
    return this.localState.getPerson$();
  }

  get place$(): Observable<any> {
    return this.globalState.getPlace$();
  }

  get personId$(): Observable<any> {
    return this.localState.getPersonId$();
  }

  get placeId$(): Observable<any> {
    return this.globalState.getPlaceId$();
  }

  getPerson(id: number): void {
    this.starWarsApi
      .getPerson(id)
      .subscribe((person) => this.localState.setPerson(person));
  }

  getPlace(id: number): void {
    this.starWarsApi
      .getPlace(id)
      .subscribe((place) => this.globalState.setPlace(place));
  }

  iteratePersonId(): void {
    this.localState.iteratePersonId();
  }

  iteratePlaceId(): void {
    this.globalState.iteratePlaceId();
  }
}
