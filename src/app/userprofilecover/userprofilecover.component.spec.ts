import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilecoverComponent } from './userprofilecover.component';

describe('UserprofilecoverComponent', () => {
  let component: UserprofilecoverComponent;
  let fixture: ComponentFixture<UserprofilecoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilecoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
