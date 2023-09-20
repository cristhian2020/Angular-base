import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=['Spiderman', 'Iroman', 'Hulk','Thor'];
  public deletedHeroe?: string;


removeLastHeore():void{
   this.deletedHeroe = this.heroNames.pop()
}

}
 