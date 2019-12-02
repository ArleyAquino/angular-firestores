import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetVestidoForComponent } from './closet-vestido-for.component';

describe('ClosetVestidoForComponent', () => {
  let component: ClosetVestidoForComponent;
  let fixture: ComponentFixture<ClosetVestidoForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetVestidoForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetVestidoForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
