import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeaderBottomComponent } from './template-header-bottom.component';

describe('TemplateHeaderBottomComponent', () => {
  let component: TemplateHeaderBottomComponent;
  let fixture: ComponentFixture<TemplateHeaderBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateHeaderBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
