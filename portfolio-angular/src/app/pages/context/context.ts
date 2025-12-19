import { Component } from '@angular/core';
import { About } from "../about/about";
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-context',
  imports: [About,Experience],
  templateUrl: './context.html',
  styleUrl: './context.scss',
})
export class Context {

}
