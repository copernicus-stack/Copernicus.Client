import { Component, OnInit } from '@angular/core';
import { GameSignalRService } from './game-signalr.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
