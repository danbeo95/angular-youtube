import { Directive, HostListener, OnInit, Input, Renderer2 } from '@angular/core';
const classNameAimated:string = 'iframe--animated';
@Directive({
  selector: '[appMoveFrame]'
})
export class MoveFrameDirective implements OnInit {
  iframeContainerHeight:number;
  @Input() iframeContainer: HTMLElement;
  @HostListener("scroll", ['$event.target'])
  onScroll(event) {
    let scrollTop = event.scrollTop;
    if(scrollTop > this.iframeContainerHeight){
      this.addClass();
    }
    else {
      this.removeClass();
    }
  }

  constructor(
    private render:Renderer2
  ) {}

  ngOnInit() {
    this.iframeContainerHeight = this.iframeContainer.clientHeight;
  }
  addClass(){
    this.render.addClass(this.iframeContainer,classNameAimated);
  }
  removeClass(){
    this.render.removeClass(this.iframeContainer,classNameAimated);
  }
}
