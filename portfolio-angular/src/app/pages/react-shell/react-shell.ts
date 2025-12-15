import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-react-shell',
  imports: [],
  templateUrl: './react-shell.html',
  styleUrl: './react-shell.scss',
})
export class ReactShell {
  private reactRoot!: HTMLElement;

  async ngAfterViewInit() {
    this.reactRoot = document.getElementById('react-root') as HTMLElement;

    const mfe = await import('mfe1/App');
    mfe.mount(this.reactRoot);
  }

  ngOnDestroy() {
    // optional cleanup later
  }
}
