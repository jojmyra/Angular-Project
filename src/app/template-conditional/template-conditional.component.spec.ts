import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConditionalComponent } from './template-conditional.component';

describe('TemplateConditionalComponent', () => {
  let component: TemplateConditionalComponent;
  let fixture: ComponentFixture<TemplateConditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateConditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
