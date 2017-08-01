import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counters-item',
  template: `
  <h1>{{count}}</h1>
  <button (click)="incrementCounters()">Increment</button>
  <button (click)="decrementCounters()">Decrement</button>
`
})
export class CountersItemComponent {
  @Input() id: number;
  @Input() count: number;
  @Output() incremented = new EventEmitter();
  @Output() decremented = new EventEmitter();

  incrementCounters() {
    this.incremented.emit();
  }

  decrementCounters() {
    this.decremented.emit();
  }
}
