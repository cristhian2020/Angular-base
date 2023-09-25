import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesMolude } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesMolude,
    DbzModule,
    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
