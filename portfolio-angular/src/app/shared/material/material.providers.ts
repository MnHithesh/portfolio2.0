import { Provider } from '@angular/core';

/* Angular Material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
export const MATERIAL_PROVIDERS: Provider[] = [
  MatDialogModule,
  MatButtonModule,
  OverlayModule,
];
