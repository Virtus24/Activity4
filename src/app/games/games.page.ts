import { Component, OnInit } from '@angular/core';
import { Game, games } from '../games';
@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  games = games;
  constructor() { }

  ngOnInit() {
  }

}
