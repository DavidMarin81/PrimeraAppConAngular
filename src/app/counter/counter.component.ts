import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter: number = 0;

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Thor'];
  
  constructor() { }

  ngOnInit() {
  }

  changeCounter(value: number): void {
    this.counter += value;
    if(this.counter < 0){
      this.counter = 0;
    } else {
      document.querySelector('h2')!.innerHTML = '<h2>Adding products</h2>';
    }
  }

  reset(): void {
    this.counter = 0;
    document.querySelector('h2')!.innerHTML = '<h2>Any Products</h2>';
  }

  addHero(): void {
    var superHeroName = prompt("Introduce un superheroe");
    this.heroNames.push(superHeroName!);
  }

  removeLastHero(): void {
      this.heroNames.pop();
  }

}
