import { Component } from '@angular/core';

@Component({
  selector: 'app-counters-list',
  template: `
  <div *ngFor="let counter of counters">
    <app-counters-item
     [id]="counter.id"
     [count]="static_counter.value"
     (incremented)="incrementCounters()"
     (decremented)="decrementCounters()">
    </app-counters-item>
  </div>
  `
})
export class CountersListComponent {
  static_counter = {
    value: 0
  };

  counters = [{ id: 0 }, { id: 1 }];

  incrementCounters() {
    this.static_counter.value++;
  }

  decrementCounters() {
    if (this.static_counter.value > 0) {
      this.static_counter.value--;
    }
  }
}
