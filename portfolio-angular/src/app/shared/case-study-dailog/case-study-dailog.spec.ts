import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyDailog } from './case-study-dailog';

describe('CaseStudyDailog', () => {
  let component: CaseStudyDailog;
  let fixture: ComponentFixture<CaseStudyDailog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyDailog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyDailog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
