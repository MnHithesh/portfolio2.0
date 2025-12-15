// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el: HTMLElement) => {
  ReactDOM.createRoot(el).render(<App />);
};

export { mount };
