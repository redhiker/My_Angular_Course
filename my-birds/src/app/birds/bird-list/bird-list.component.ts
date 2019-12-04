import { Component, OnInit } from '@angular/core';

import { Bird } from '../bird.model';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {

  birdsArray: Bird[];

  constructor() { }

  ngOnInit() {

    this.birdsArray = [
      {
        id: 1,
        name: "Cardinal",
        kind: "Songbird",
        niche: "Perching Bird nests in trees.",
        url: "https://www.audubon.org/sites/default/files/styles/grid_gallery_lightbox/public/Red-tailed_Hawk_r25-8-001_l.jpg?itok=6fzB2emF"
      },
      {
        id: 2,
        name: "Red-tailed Hawk",
        kind: "Raptor",
        niche: "Has very good eyesight to spot small game.",
        url: "https://www.audubon.org/sites/default/files/styles/grid_gallery_lightbox/public/Red-tailed_Hawk_r25-8-001_l.jpg?itok=6fzB2emF"
      },
      {
        id: 3,
        name: "Pileated Woodpecker",
        kind: "Woodpecker",
        niche: "Likes trees.",
        url: "https://www.audubon.org/sites/default/files/styles/grid_gallery_lightbox/public/Red-tailed_Hawk_r25-8-001_l.jpg?itok=6fzB2emF"
      }
    ];
  }

}
