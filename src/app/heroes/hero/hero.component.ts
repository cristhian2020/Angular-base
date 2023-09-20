import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name:string = 'iroman';
  public age:number = 42;

  get capitalizeName():string{
    return this.name.toUpperCase();

  }
  get heroeDescription():string{
    return `${this.name} - ${this.age}`
  }
  changeHeroe():void{
    this.name = 'SpiderMan';

  }
  changeAge():void{
    this.age = 45;

  }
  resetForm():void{
    this.age = 42;
    this.name = 'iroman';
  }

}
