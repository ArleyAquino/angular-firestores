import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetSuperiorForComponent } from './closet-superior-for.component';

describe('ClosetSuperiorForComponent', () => {
  let component: ClosetSuperiorForComponent;
  let fixture: ComponentFixture<ClosetSuperiorForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetSuperiorForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetSuperiorForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
