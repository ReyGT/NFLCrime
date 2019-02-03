import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsForCrimeComponent } from './top-teams-for-crime.component';

describe('TopTeamsForCrimeComponent', () => {
  let component: TopTeamsForCrimeComponent;
  let fixture: ComponentFixture<TopTeamsForCrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTeamsForCrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeamsForCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
