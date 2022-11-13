import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // counter: number = 0;

  constructor() { }

  ngOnInit(): void {}

  // onIncrement() {
  //   this.counter++; not need for NgRx
  // }
  // onDecrement(){
  //   this.counter--;
  // }
  // onReset(){
  //   this.counter = 0;
  // }

}
