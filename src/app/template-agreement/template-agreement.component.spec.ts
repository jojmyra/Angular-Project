import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAgreementComponent } from './template-agreement.component';

describe('TemplateAgreementComponent', () => {
  let component: TemplateAgreementComponent;
  let fixture: ComponentFixture<TemplateAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
