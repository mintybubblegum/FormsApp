import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerContinentComponent } from './per-continent.component';

describe('PerContinentComponent', () => {
  let component: PerContinentComponent;
  let fixture: ComponentFixture<PerContinentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerContinentComponent]
    });
    fixture = TestBed.createComponent(PerContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
