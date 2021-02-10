import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-iterate-id-button',
  templateUrl: './iterate-id-button.component.html',
  styleUrls: ['./iterate-id-button.component.css'],
})
export class IterateIdButtonComponent implements OnInit {
  @Output() iterateId = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onIterateId() {
    this.iterateId.emit();
  }
}
