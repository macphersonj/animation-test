import { Injectable } from '@angular/core';
import { gsap, Power2, Elastic, Quad, TweenMax } from 'gsap/all';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  /*---=| GSAP v3 Animation Engine |=---*/

  /*--=| Fade From |=--*/
  public fFadeFrom(e, tym, alfa, dlay) {
    gsap.from(e, { duration: tym, opacity: alfa, ease: Power2, delay: dlay });
  }

  public myAnimCode(e) {
    gsap.from(e, { opacity: 0, y: 100, duration: 1 });
  }

  public circleSpinny(e) {
    TweenMax.from(e, 0.5, {
      css: { scale: 0.05, opacity: 0, rotation: 180 },
      ease: Quad.easeInOut,
    }),
      400,
      -400;
  }

  public clickSpin(e) {
    TweenMax.to(e, 0.5, {
      rotation: '-=72_ccw',

      ease: Power2.easeNone,
    }),
      400,
      -400;
  }
}
