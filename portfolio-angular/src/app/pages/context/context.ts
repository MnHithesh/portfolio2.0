import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import { About } from '../about/about';

@Component({
  selector: 'app-context',
  templateUrl: './context.html',
  styleUrl: './context.scss',
  standalone: true,
  imports: [About]
})
export class Context implements AfterViewInit, OnDestroy {
  private lenis!: Lenis;
  private rafId!: number;
  activeSection = 'about';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const wrapper = document.getElementById('lenis-wrapper')!;
    const content = document.getElementById('lenis-content')!;

    this.lenis = new Lenis({
      wrapper,
      content,
      smoothWheel: true,
      lerp: 0.08,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);

    const sections = Array.from(content.querySelectorAll<HTMLElement>('section'));

    this.lenis.on('scroll', (e: any) => {
      const scrollY = e.scroll;
      const midpoint = scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (midpoint >= top && midpoint < bottom) {
          if (this.activeSection !== section.id) {
            this.activeSection = section.id;
            this.cdr.detectChanges();
          }
          break;
        }
      }
    });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
    this.lenis.destroy();
  }

  scrollTo(id: string) {
    this.lenis.scrollTo(`#${id}`, {
      offset: 0,
      duration: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  }
}
