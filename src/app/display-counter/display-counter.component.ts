import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState, multiplyCounter } from '../store/app.state';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss']
})
export class DisplayCounterComponent implements OnInit {

  @Input()
  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
    );

  constructor(private store: Store<{app: IAppState}>) {}

  ngOnInit(): void {
  }

  multiplyCounter() {
    this.store.dispatch(multiplyCounter());
  }

}
