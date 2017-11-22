import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatServeurComponent } from './etat-serveur.component';

describe('EtatServeurComponent', () => {
  let component: EtatServeurComponent;
  let fixture: ComponentFixture<EtatServeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatServeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
