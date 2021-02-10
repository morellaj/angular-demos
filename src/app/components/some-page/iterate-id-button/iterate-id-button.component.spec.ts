import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateIdButtonComponent } from './iterate-id-button.component';

describe('IterateIdButtonComponent', () => {
  let component: IterateIdButtonComponent;
  let fixture: ComponentFixture<IterateIdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterateIdButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateIdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
