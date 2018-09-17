import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContactComponent } from './template-contact.component';

describe('TemplateContactComponent', () => {
  let component: TemplateContactComponent;
  let fixture: ComponentFixture<TemplateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
