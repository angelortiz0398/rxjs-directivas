import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAreaMouse]',
})
export class AreaMouseDirective implements OnInit {
  @Input()
  color: string = 'green';
  @Input()
  height: string = '200';
  constructor(private el: ElementRef<HTMLDivElement>) {}
  ngOnInit(): void {
    this.setBackground();
    this.setHeight();
  }
  setBackground() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  setHeight() {
    this.el.nativeElement.style.height = `${this.height}px`;
  }
}
