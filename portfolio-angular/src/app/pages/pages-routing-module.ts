import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Entry } from './entry/entry';
import { Context } from './context/context';
import { Work } from './work/work';
import { Thinking } from './thinking/thinking';
import { Skills } from './skills/skills';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ReactShell } from './react-shell/react-shell';

const routes: Routes = [
  { path: '', component: Entry },
  { path: 'context', component: Context },
  { path: 'work', component: Work },
  { path: 'thinking', component: Thinking },
  { path: 'skills', component: Skills },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'react', component: ReactShell },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
