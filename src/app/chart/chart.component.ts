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
  showMod3 = false;
  showMod4 = false;
  showMod5 = false;

  anim = this._gsapService;

  constructor(private _gsapService: GsapService) {} // inject service

  ngOnInit(): void {
    this.fOpeningAnim();
  }

  public fOpeningAnim() {
    this.anim.circleSpinny('.centrepoint');
  }

  show1() {
    this.showMod1 = true;
    this.showMod2 = false;
    this.showMod3 = false;
    this.showMod4 = false;
    this.showMod5 = false;

    this.anim.clickSpin('.centrepoint');
  }
  show2() {
    this.showMod1 = false;
    this.showMod2 = true;
    this.showMod3 = false;
    this.showMod4 = false;
    this.showMod5 = false;

    this.anim.clickSpin('.centrepoint');
  }

  show3() {
    this.anim.clickSpin('.centrepoint');
  }
  show4() {
    this.anim.clickSpin('.centrepoint');
  }
  show5() {
    this.anim.clickSpin('.centrepoint');
  }
}
