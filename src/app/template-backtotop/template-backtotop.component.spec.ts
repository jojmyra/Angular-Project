import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBacktotopComponent } from './template-backtotop.component';

describe('TemplateBacktotopComponent', () => {
  let component: TemplateBacktotopComponent;
  let fixture: ComponentFixture<TemplateBacktotopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBacktotopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBacktotopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
