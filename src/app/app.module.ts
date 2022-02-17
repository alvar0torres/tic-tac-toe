import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NoWinnerModalComponent } from './modals/no-winner-modal/no-winner-modal.component';
import { WinnerModalComponent } from './modals/winner-modal/winner-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NoWinnerModalComponent,
    BoardComponent,
    WinnerModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
