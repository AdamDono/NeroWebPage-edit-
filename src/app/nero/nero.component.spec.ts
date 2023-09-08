import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeroComponent } from './nero.component';

describe('NeroComponent', () => {
  let component: NeroComponent;
  let fixture: ComponentFixture<NeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
