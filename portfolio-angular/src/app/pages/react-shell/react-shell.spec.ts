import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactShell } from './react-shell';

describe('ReactShell', () => {
  let component: ReactShell;
  let fixture: ComponentFixture<ReactShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
