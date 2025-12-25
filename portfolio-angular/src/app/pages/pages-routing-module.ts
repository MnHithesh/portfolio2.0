import { Routes } from '@angular/router';
import { Entry } from './entry/entry';
import { ReactShell } from './react-shell/react-shell';
import { Context } from './context/context';

export const PAGES_ROUTES: Routes = [
  { path: '', component: Entry },
  { path: 'react', component: ReactShell },
  { path: 'context', component: Context },
];
