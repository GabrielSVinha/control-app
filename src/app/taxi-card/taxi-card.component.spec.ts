import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiCardComponent } from './taxi-card.component';

describe('TaxiCardComponent', () => {
  let component: TaxiCardComponent;
  let fixture: ComponentFixture<TaxiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
