import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavLayout } from './side-nav-layout';

describe('SideNavLayout', () => {
  let component: SideNavLayout;
  let fixture: ComponentFixture<SideNavLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
