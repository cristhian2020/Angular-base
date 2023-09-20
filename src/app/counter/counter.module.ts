import { NgModule } from '@angular/core';


import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    
    exports: [
        CounterComponent,
    ],
    declarations: [
        CounterComponent,
    ],
   
})
export class CounterModule { }
