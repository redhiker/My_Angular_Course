import { Component, OnInit } from '@angular/core';

import { Bird } from '../bird.model';

import { BirdService } from "../shared/bird.service";

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {

  birdsArray: Bird[];

  constructor(private birdService : BirdService) { }

  getBirds() {
    this.birdsArray = this.birdService.getBirds();
  }

  ngOnInit() {
    this.getBirds();
  }

  parentFunctionHandler(bird) {
    alert('Bird ' + bird.name + ' was sent from the album card component');
  }

}
