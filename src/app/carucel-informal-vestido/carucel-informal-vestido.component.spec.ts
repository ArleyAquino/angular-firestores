import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarucelInformalVestidoComponent } from './carucel-informal-vestido.component';

describe('CarucelInformalVestidoComponent', () => {
  let component: CarucelInformalVestidoComponent;
  let fixture: ComponentFixture<CarucelInformalVestidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarucelInformalVestidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarucelInformalVestidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
