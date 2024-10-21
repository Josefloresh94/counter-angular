import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  title: string = 'Counter usando redux!';

  counter: number;

  constructor(private store: Store<{counter: number}>){
    this.counter = 0;
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  increment(): void{
    // this.counter++;
    this.store.dispatch(increment({add: 1}))
    console.log('incrementando...');
  }
  decrement(): void{
    // this.counter--;
    this.store.dispatch(decrement({rest: 1}))
    console.log('Decrementando...');
  }
  reset(): void{
    // this.counter = 0;
    this.store.dispatch(reset({cero: 0}))
    console.log('Reset el contador...');
  }
}
