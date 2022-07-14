import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhibliFilmsComponent } from './ghibli-films.component';

describe('GhibliFilmsComponent', () => {
  let component: GhibliFilmsComponent;
  let fixture: ComponentFixture<GhibliFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhibliFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhibliFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
