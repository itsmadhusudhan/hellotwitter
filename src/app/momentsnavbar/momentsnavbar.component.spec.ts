import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsnavbarComponent } from './momentsnavbar.component';

describe('MomentsnavbarComponent', () => {
  let component: MomentsnavbarComponent;
  let fixture: ComponentFixture<MomentsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
