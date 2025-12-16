declare module 'mfe1/App' {
  export function mount(el: HTMLElement, props: { theme: string; source: string }): void;
  export function unmount(): void;
}
