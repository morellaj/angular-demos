import { Component } from '@angular/core';
import { SomePageViewModel } from './some-page.view-model';

@Component({
  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styleUrls: ['./some-page.component.css'],
  providers: [SomePageViewModel],
})
export class SomePageView {
  person: object;
  personId: number;
  place: object;
  placeId: number;

  constructor(private sandbox: SomePageViewModel) {
    this.sandbox.person$.subscribe((person) => (this.person = person));
    this.sandbox.personId$.subscribe((id) => (this.personId = id));
    this.sandbox.place$.subscribe((place) => (this.place = place));
    this.sandbox.placeId$.subscribe((id) => (this.placeId = id));
  }

  //#region Event handlers

  getPerson(): void {
    this.sandbox.getPerson(this.personId);
  }

  onGetPlace(): void {
    this.sandbox.getPlace(this.placeId);
  }

  onIteratePersonId(): void {
    this.sandbox.iteratePersonId();
  }

  onIteratePlaceId(): void {
    this.sandbox.iteratePlaceId();
  }

  //#endregion

  //#region Property getters

  get personDisplay(): string {
    return JSON.stringify(this.person);
  }

  get placeDisplay(): string {
    return JSON.stringify(this.place);
  }

  get personIdDisplay(): string {
    return this.personId.toString();
  }

  get placeIdDisplay(): string {
    return this.placeId.toString();
  }
  //#endregion
}
