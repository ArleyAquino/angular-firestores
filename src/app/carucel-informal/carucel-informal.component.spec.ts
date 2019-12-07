import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarucelInformalComponent } from './carucel-informal.component';

describe('CarucelInformalComponent', () => {
  let component: CarucelInformalComponent;
  let fixture: ComponentFixture<CarucelInformalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarucelInformalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarucelInformalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
