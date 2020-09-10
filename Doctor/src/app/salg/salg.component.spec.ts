import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalgComponent } from './salg.component';

describe('SalgComponent', () => {
  let component: SalgComponent;
  let fixture: ComponentFixture<SalgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
