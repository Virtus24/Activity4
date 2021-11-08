import { Component, OnInit } from '@angular/core';
import { Game, games } from '../games';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  game : Game | undefined;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
  const gameId = Number(routeParams.get('id'));
  console.log(gameId);


  this.game = games.find(game => game.id === gameId);
  console.log(this.game);
  }

}
