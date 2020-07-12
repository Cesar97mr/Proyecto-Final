import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselBasic } from './pages.component';

describe('PagesComponent', () => {
  let component: NgbdCarouselBasic;
  let fixture: ComponentFixture<NgbdCarouselBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdCarouselBasic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
