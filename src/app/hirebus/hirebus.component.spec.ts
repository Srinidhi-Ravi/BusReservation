import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirebusComponent } from './hirebus.component';

describe('HirebusComponent', () => {
  let component: HirebusComponent;
  let fixture: ComponentFixture<HirebusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirebusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
