import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarucelFormalVestidoComponent } from './carucel-formal-vestido.component';

describe('CarucelFormalVestidoComponent', () => {
  let component: CarucelFormalVestidoComponent;
  let fixture: ComponentFixture<CarucelFormalVestidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarucelFormalVestidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarucelFormalVestidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
