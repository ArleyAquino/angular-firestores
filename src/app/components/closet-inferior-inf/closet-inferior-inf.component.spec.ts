import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetInferiorInfComponent } from './closet-inferior-inf.component';

describe('ClosetInferiorInfComponent', () => {
  let component: ClosetInferiorInfComponent;
  let fixture: ComponentFixture<ClosetInferiorInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetInferiorInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetInferiorInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
