import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerotokenComponent } from './nerotoken.component';

describe('NerotokenComponent', () => {
  let component: NerotokenComponent;
  let fixture: ComponentFixture<NerotokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerotokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NerotokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
