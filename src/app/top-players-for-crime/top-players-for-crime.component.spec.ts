import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayersForCrimeComponent } from './top-players-for-crime.component';

describe('TopPlayersForCrimeComponent', () => {
  let component: TopPlayersForCrimeComponent;
  let fixture: ComponentFixture<TopPlayersForCrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlayersForCrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlayersForCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
