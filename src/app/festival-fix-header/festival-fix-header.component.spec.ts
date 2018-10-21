import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalFixHeaderComponent } from './festival-fix-header.component';

describe('FestivalFixHeaderComponent', () => {
  let component: FestivalFixHeaderComponent;
  let fixture: ComponentFixture<FestivalFixHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalFixHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalFixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
