import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NamesModalComponent } from './modals/names-modal/names-modal.component';
import { NoWinnerModalComponent } from './modals/no-winner-modal/no-winner-modal.component';
import { WinnerModalComponent } from './modals/winner-modal/winner-modal.component';
import { StartModalComponent } from './modals/start-modal/start-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NoWinnerModalComponent,
    BoardComponent,
    WinnerModalComponent,
    NamesModalComponent,
    StartModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
