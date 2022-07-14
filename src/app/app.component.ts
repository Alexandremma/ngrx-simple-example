import { IAppState, incrementCounter, decrementCounter, inputCounter } from './store/app.state';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngrx-tutorial-hype-it';

  @ViewChild('counterInput')
  counterInput: ElementRef = { nativeElement: {} };

  constructor(private store: Store<{ app: IAppState }>,private primengConfig: PrimeNGConfig) {}

  // observable para pegar a informação do reducer do Store. para pegar info = "select(nomeReducerNoAppModuleStoreRoot)" ".pipe(para mapear ou tratar algum dado)"
  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
    );

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

  incrementCounter() {
    // disparar a ação ao iniciar função, utilizar "dispatch(nomeDaAçãoQueQuerDisparar())" utilizar parenteses na action
    this.store.dispatch(incrementCounter());
  }

  decrementCounter() {
    this.store.dispatch(decrementCounter());
  }

  inputCounter(counterValue: string) {
    let counterToNumber = Number(counterValue);

    this.store.dispatch(inputCounter({ payload: counterToNumber }));
  }

}
