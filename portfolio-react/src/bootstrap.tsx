// import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";

let root: ReactDOM.Root | null = null;

type Props = {
  theme: string;
  source: string;
};

const mount = (el: HTMLElement, props: Props) => {
  root = ReactDOM.createRoot(el);
  root.render(<App {...props} />);
};

const unmount = () => {
  if (root) {
    root.unmount();
    root = null;
  }
};

export { mount, unmount };
