import { state, animate, trigger, transition, style, group } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  transition('void => *', [
    style({
      opacity: 0,
    }),
    animate(1000, style({
        opacity: 1,
      })
    ,)
  ]),
  transition('* => void', [
    animate(500, style({
        opacity: 0,
      })
    ,)
  ])
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate(400, style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    })),
  ])
]);

export const listStateTrigger = trigger('listState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0
  // })))
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate(5000, style({
        backgroundColor: 'red'
      }))
    ]),
    animate(300,style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);
