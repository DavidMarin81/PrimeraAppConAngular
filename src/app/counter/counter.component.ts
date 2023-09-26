import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter: number = 1;
  
  constructor() { }

  ngOnInit() {
  }

  changeCounter(value: number): void {
    this.counter += value;
    if(this.counter == 0){
      this.counter = 1;
    }
  }

  reset(): void {
    this.counter = 1;
  }

}
