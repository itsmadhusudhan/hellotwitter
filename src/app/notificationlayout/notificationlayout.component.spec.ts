import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationlayoutComponent } from './notificationlayout.component';

describe('NotificationlayoutComponent', () => {
  let component: NotificationlayoutComponent;
  let fixture: ComponentFixture<NotificationlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
