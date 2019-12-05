import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Bird } from "../bird.model";

@Injectable({
  providedIn: "root"
})
export class BirdService {
  url = "http://localhost:4222/birds";

  constructor(private http: HttpClient) {}

  getBirds(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.url);
}
}
