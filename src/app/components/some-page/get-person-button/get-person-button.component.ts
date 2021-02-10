import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-person-button',
  templateUrl: './get-person-button.component.html',
  styleUrls: ['./get-person-button.component.css'],
})
export class GetPersonButtonComponent {
  @Output() getPerson = new EventEmitter<void>();

  onGetPerson(): void {
    this.getPerson.emit();
  }
}
