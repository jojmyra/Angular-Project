import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeaderCenterComponent } from './template-header-center.component';

describe('TemplateHeaderCenterComponent', () => {
  let component: TemplateHeaderCenterComponent;
  let fixture: ComponentFixture<TemplateHeaderCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateHeaderCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHeaderCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
