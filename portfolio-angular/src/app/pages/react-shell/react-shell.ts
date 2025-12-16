import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-react-shell',
  imports: [],
  templateUrl: './react-shell.html',
  styleUrl: './react-shell.scss',
})
export class ReactShell {
  private mfe: any;

  async ngAfterViewInit() {
    this.mfe = await import('mfe1/App');
    const container = document.getElementById('react-root') as HTMLElement;
    this.mfe.mount(container, { theme: 'dark', source: 'Angular Host' });
  }

  ngOnDestroy() {
    if(this.mfe?.unmount){
      this.mfe.unmount();
    }
  }
}
