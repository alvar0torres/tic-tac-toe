import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BoardService, Moves } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, OnDestroy {
  player$: Observable<string>;
  moves$: Observable<Moves>;
  player1: string;
  player2: string;
  endGame$: Observable<boolean>;

  currentTurnPlayer: string;

  player1Sub: Subscription;
  player2Sub: Subscription;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.player$ = this.boardService.playerSubject;
    this.moves$ = this.boardService.movesSubject;
    this.endGame$ = this.boardService.endGameSubject;
    this.player1Sub = this.boardService.player1Subject.subscribe((name) => {
      this.player1 = name;
      this.currentTurnPlayer = name;
    });
    this.player2Sub = this.boardService.player2Subject.subscribe(
      (name) => (this.player2 = name)
    );
  }

  onMove(number: number) {
    this.boardService.onMove(number);
    this.currentTurnPlayer =
      this.currentTurnPlayer === this.player1 ? this.player2 : this.player1;
  }

  ngOnDestroy(): void {
    this.player1Sub.unsubscribe();
    this.player2Sub.unsubscribe();
  }
}
