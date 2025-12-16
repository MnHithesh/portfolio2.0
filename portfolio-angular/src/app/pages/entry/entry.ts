import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MATERIAL_PROVIDERS } from '../../shared/material/material.providers';
import { CaseStudyDailog } from '../../shared/case-study-dailog/case-study-dailog';
import { MatDialog } from '@angular/material/dialog';

type Mode = 'default' | 'angular' | 'react';

@Component({
  selector: 'app-entry',
  imports: [CommonModule, MATERIAL_PROVIDERS],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class Entry {
  mode: Mode = 'default';
  constructor(private router: Router, private dialog: MatDialog) {}

  setMode(mode: Mode) {
    this.mode = mode;
  }

  resetMode() {
    this.mode = 'default';
  }

  goAngular() {
    this.router.navigateByUrl('/');
  }

  goReact() {
    this.router.navigateByUrl('/react');
  }

  openCaseStudy(){
    this.dialog.open(CaseStudyDailog, {
  width: '800px',
  maxWidth: '95vw',
  panelClass: 'case-study-dialog',
});
  }
}
