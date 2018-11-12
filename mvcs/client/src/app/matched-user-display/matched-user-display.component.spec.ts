import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedUserDisplayComponent } from './matched-user-display.component';

describe('MatchedUserDisplayComponent', () => {
  let component: MatchedUserDisplayComponent;
  let fixture: ComponentFixture<MatchedUserDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedUserDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedUserDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
