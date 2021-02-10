import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface ISomePageState {
  getPerson$: () => Observable<any>;
  setPerson: (person: any) => void;
  getPersonId$: () => Observable<any>;
  iteratePersonId: () => void;
}

@Injectable({
  providedIn: 'any',
})
export class SomePageState implements ISomePageState {
  private person$ = new BehaviorSubject<any>(null);
  private personId$ = new BehaviorSubject<number>(1);

  constructor() {}

  getPerson$(): Observable<any> {
    return this.person$.asObservable();
  }

  setPerson(person: any): void {
    this.person$.next(person);
  }

  getPersonId$(): Observable<any> {
    return this.personId$.asObservable();
  }

  iteratePersonId(): void {
    this.personId$.next(this.personId$.value + 1);
  }
}
