import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironMan";
  public names: string[] = ["spiderman", "superman", "ironMan", "capitan America", "batman"];
  public age: number = 45;

  //Metodo Getter
  get capitalizedName(): string {
    this.name = this.name[0].toUpperCase() + this.name.substring(1);
    return this.name;
  }

  toUpperCaseName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    this.name = this.capitalizedName;
    return `${this.name} - ${this.age}`; //Usar tildes invertidas
  }

  changeHero(): string {
    this.name = this.names[Math.floor(Math.random() * 5)];
    return this.name;
  }
  
  changeAge(): number {
    this.age =  Math.floor(Math.random() * 5);
    return this.age;
  }

}
