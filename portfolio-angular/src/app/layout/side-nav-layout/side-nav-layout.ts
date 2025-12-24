import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { Context } from '../../pages/context/context';

@Component({
  selector: 'app-side-nav-layout',
  imports: [CommonModule, Context, MatSidenavModule, MatStepperModule],
  templateUrl: './side-nav-layout.html',
  styleUrl: './side-nav-layout.scss',
})
export class SideNavLayout {
  activeIndex = 0;

  scrollTo(id: string, index: number) {
    this.activeIndex = index;

    const container = document.getElementById('scrollContainer');
    const target = document.getElementById(id);

    if (!container || !target) {
      console.warn('Scroll failed', { container, target });
      return;
    }

    container.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
}
