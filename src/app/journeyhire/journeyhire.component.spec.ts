import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyhireComponent } from './journeyhire.component';

describe('JourneyhireComponent', () => {
  let component: JourneyhireComponent;
  let fixture: ComponentFixture<JourneyhireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyhireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyhireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
