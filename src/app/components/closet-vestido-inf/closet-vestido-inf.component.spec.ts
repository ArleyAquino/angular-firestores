import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetVestidoInfComponent } from './closet-vestido-inf.component';

describe('ClosetVestidoInfComponent', () => {
  let component: ClosetVestidoInfComponent;
  let fixture: ComponentFixture<ClosetVestidoInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetVestidoInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetVestidoInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
