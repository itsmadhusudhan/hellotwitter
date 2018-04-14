import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourtrendsComponent } from './yourtrends.component';

describe('YourtrendsComponent', () => {
  let component: YourtrendsComponent;
  let fixture: ComponentFixture<YourtrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourtrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourtrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
