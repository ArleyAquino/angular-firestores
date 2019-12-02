import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetInferiorForComponent } from './closet-inferior-for.component';

describe('ClosetInferiorForComponent', () => {
  let component: ClosetInferiorForComponent;
  let fixture: ComponentFixture<ClosetInferiorForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetInferiorForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetInferiorForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
