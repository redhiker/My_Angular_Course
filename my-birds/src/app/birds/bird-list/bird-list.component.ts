import { Component, OnInit } from '@angular/core';

import { Bird } from '../bird.model';

import { BIRDS } from "../birds.data";

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {

  birdsArray: Bird[];

  constructor() { }

  ngOnInit() {

    this.birdsArray = BIRDS;
  }

  parentFunctionHandler(bird) {
    alert('Bird ' + bird.name + ' was sent from the album card component');
}

}
