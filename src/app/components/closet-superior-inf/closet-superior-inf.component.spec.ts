import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetSuperiorInfComponent } from './closet-superior-inf.component';

describe('ClosetSuperiorInfComponent', () => {
  let component: ClosetSuperiorInfComponent;
  let fixture: ComponentFixture<ClosetSuperiorInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetSuperiorInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetSuperiorInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
