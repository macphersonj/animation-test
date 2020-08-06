import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';
import { GsapService } from '../gsap.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  animations: [
    trigger('itemAnim', [
      //entry
      transition('void => *', [
        // initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          padding: 0,
        }),
        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': '*',
            padding: '*',
          })
        ),
        animate(1000),
      ]),
      //exit
    ]),
  ],
})
export class ChartComponent implements OnInit {
  showMod1 = true;
  showMod2 = false;

  constructor(private _gsapService: GsapService) {} // inject service

  ngOnInit(): void {
    this.fOpeningAnim();
  }

  public fOpeningAnim() {
    const anim = this._gsapService;
    anim.circleSpinny('.centrepoint');
  }

  show1() {
    this.showMod1 = true;
    this.showMod2 = false;

    const anim = this._gsapService;
  }
  show2() {
    this.showMod1 = false;
    this.showMod2 = true;
  }
}
