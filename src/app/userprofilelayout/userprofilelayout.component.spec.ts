import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilelayoutComponent } from './userprofilelayout.component';

describe('UserprofilelayoutComponent', () => {
  let component: UserprofilelayoutComponent;
  let fixture: ComponentFixture<UserprofilelayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilelayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
