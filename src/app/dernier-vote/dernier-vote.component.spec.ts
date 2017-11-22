import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierVoteComponent } from './dernier-vote.component';

describe('DernierVoteComponent', () => {
  let component: DernierVoteComponent;
  let fixture: ComponentFixture<DernierVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DernierVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DernierVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
