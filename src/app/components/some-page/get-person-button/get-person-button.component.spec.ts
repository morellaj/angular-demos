import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonButtonComponent } from './get-person-button.component';

describe('GetPersonButtonComponent', () => {
  let component: GetPersonButtonComponent;
  let fixture: ComponentFixture<GetPersonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPersonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
