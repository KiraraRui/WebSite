import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalgsProduktComponent } from './salgs-produkt.component';

describe('SalgsProduktComponent', () => {
  let component: SalgsProduktComponent;
  let fixture: ComponentFixture<SalgsProduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalgsProduktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalgsProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
