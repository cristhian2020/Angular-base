import { NgModule } from '@angular/core';
import { HeroComponent } from '../heroes/hero/hero.component';
import { ListComponent } from '../heroes/list/list.component';
import { CommonModule } from '@angular/common';



@NgModule({
   
    exports: [
        HeroComponent,
        ListComponent,
    ],
    declarations: [
        HeroComponent,
        ListComponent,


    ],
    imports:[
        CommonModule

    ],
   
})
export class HeroesMolude { }
