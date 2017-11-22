import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierComponent } from './dernier.component';

describe('DernierComponent', () => {
  let component: DernierComponent;
  let fixture: ComponentFixture<DernierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DernierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DernierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
