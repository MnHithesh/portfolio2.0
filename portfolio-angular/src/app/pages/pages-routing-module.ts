import { Routes } from '@angular/router';
import { Entry } from './entry/entry';
import { ReactShell } from './react-shell/react-shell';
import { SideNavLayout } from '../layout/side-nav-layout/side-nav-layout';
import { Context } from './context/context';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';

export const PAGES_ROUTES: Routes = [
  { path: '', component: Entry },
  { path: 'react', component: ReactShell },
  {
    path: '',
    component: SideNavLayout,
    children: [
      { path: 'context', component: Context },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'projects', component: Projects },
      { path: 'experience', component: Experience}
    ],
  },
];
