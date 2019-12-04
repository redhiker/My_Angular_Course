import { Injectable } from "@angular/core";

import { BIRDS } from "../birds.data";

@Injectable({
  providedIn: "root"
})
export class BirdService {
  constructor() {}

  getBirds() {
    return BIRDS;
  }
}
