import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  Subscription,
  take,
  fromEvent,
} from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {
  // FromEvent
  subscriptor: Subscription | null = null;
  x: number = 0;
  y: number = 0;
  ngOnInit(): void {
    const obs = fromEvent<MouseEvent>(
      document.querySelector('#area')!,
      'mousemove'
    );
    this.subscriptor = obs.subscribe((ev)=>{
      console.log("first")
      this.x = ev.clientX;
      this.y = ev.clientY;
    });
  }
  ngOnDestroy(): void {
    this.subscriptor?.unsubscribe();
  }

  // Subscribe e Interval
  // miIntervalo: Observable<number> = interval(1000).pipe(
  //   map((value) => value + 1),
  //   filter((value) => value % 2 === 0),
  //   take(4)
  // )
  // // Significa que es de tipo subscription o tambien puede ser nulo
  // miSubscription: Subscription | null = null;
  // constructor() {
  //   let numero: number = 0;
  //   const miObservable = new Observable<number>((observer) => {
  //     setInterval(() => {
  //       numero++;
  //       observer.next(numero);
  //       /*
  //       observer.complete();
  //       if (numero == 3) observer.error('Numero erroneo'); */
  //     }, 3000);
  //   });
  //   miObservable.subscribe({
  //     /*next: (result) => {
  //       console.log(result);
  //     },
  //     /*error: (error) => {
  //       console.log(error);
  //     },*/
  //     /*complete: () => {
  //       console.log('Observable completado');
  //     },*/
  //   });
  // }

  // ngOnInit(): void {
  //   this.miSubscription = this.miIntervalo.subscribe({
  //       next: (value) => console.log(value),
  //       complete: () => console.log("Estos son los primeros 4 numeros pares"),
  //     });
  // }
  // ngOnDestroy(){
  //   // Fuerza a que si va recibir un valor de tipo subscription
  //   // Se tendran las funciones de subscription disponibles
  //   this.miSubscription!.unsubscribe();
  //   console.log('Componente destruido');
  // }
}
