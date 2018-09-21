import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoSidebarComponent } from './home-no-sidebar.component';

describe('HomeNoSidebarComponent', () => {
  let component: HomeNoSidebarComponent;
  let fixture: ComponentFixture<HomeNoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
