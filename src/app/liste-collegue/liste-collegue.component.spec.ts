import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCollegueComponent } from './liste-collegue.component';

describe('ListeCollegueComponent', () => {
  let component: ListeCollegueComponent;
  let fixture: ComponentFixture<ListeCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
