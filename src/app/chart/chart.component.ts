import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';
import { GsapService } from '../gsap.service';
import { gsap, Power2, Elastic, Quad, TweenMax } from 'gsap/all';

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

  ngOnInit() {
    this.fOpeningAnim();

    let circleSegments = document.querySelectorAll('.c-quad');

    let numSections = circleSegments.length;

    let currIndex = 0;
    let animate = gsap.to({}, {});

    circleSegments.forEach((segment, index) => {
      segment.addEventListener('click', () => {
        if (!animate.isActive() && index !== currIndex) {
          let toGo = index - currIndex;

          if (toGo < 1) {
            toGo = numSections + toGo;
          }

          let spinAngle = toGo * 72;

          animate = gsap.to('.centrepoint', {
            rotation: '-=' + spinAngle,
            ease: 'none',
          });

          animate = gsap.to('.c-label', {
            rotation: '+=' + spinAngle,
            ease: 'none',
          });

          currIndex = index;
        }
      });
    });
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
  }
  show2() {
    this.showMod1 = false;
    this.showMod2 = true;
    this.showMod3 = false;
    this.showMod4 = false;
    this.showMod5 = false;
  }

  show3() {}
  show4() {}
  show5() {}
}
