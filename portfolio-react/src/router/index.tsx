import { createBrowserRouter } from 'react-router-dom';
import Entry from '../pages/Entry';
import Context from '../pages/Context';
import Work from '../pages/Work';
import Thinking from '../pages/Thinking';
import Skills from '../pages/Skills';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  { path: '/', element: <Entry /> },
  { path: '/context', element: <Context /> },
  { path: '/work', element: <Work /> },
  { path: '/thinking', element: <Thinking /> },
  { path: '/skills', element: <Skills /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]);
