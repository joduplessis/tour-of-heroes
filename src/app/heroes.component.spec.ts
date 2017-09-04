import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent (inline template)', () => {

  let comp:    HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
    });

    fixture = TestBed.createComponent(HeroesComponent);

    comp = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });
});
