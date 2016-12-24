import {
  Component, Input,
  trigger, state, animate, transition, style
} from '@angular/core';

@Component({
  selector : 'app-loading-panel',
  animations: [
    trigger('visibilityChanged', [
      state('true' , style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('* => *', animate('.7s'))
    ])
  ],
  templateUrl: './loading-panel.component.html',
  styleUrls: ['./loading-panel.component.css']
})
export class LoadingPanelComponent {
  @Input() isVisible : boolean = true;

  animationStarted(event){
    $(".preloader").css("display", "block");
  }

  animationDone(event){
    $(".preloader").css("display", "none");
  }
}
