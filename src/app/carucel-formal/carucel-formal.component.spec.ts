import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarucelFormalComponent } from './carucel-formal.component';

describe('CarucelFormalComponent', () => {
  let component: CarucelFormalComponent;
  let fixture: ComponentFixture<CarucelFormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarucelFormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarucelFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
