import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShelterComponent } from './pet-shelter.component';

describe('PetShelterComponent', () => {
  let component: PetShelterComponent;
  let fixture: ComponentFixture<PetShelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetShelterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
