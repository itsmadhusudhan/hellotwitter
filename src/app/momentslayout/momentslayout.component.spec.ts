import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentslayoutComponent } from './momentslayout.component';

describe('MomentslayoutComponent', () => {
  let component: MomentslayoutComponent;
  let fixture: ComponentFixture<MomentslayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentslayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
