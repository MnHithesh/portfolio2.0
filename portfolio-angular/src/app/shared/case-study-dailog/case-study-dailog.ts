import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-case-study-dailog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './case-study-dailog.html',
  styleUrl: './case-study-dailog.scss',
})
export class CaseStudyDailog {
  constructor(private dialogRef: MatDialogRef<CaseStudyDailog>) {}

  close() {
    this.dialogRef.close();
  }
}
