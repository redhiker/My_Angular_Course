import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumListComponent } from './album-list/album-list.component';


@NgModule({
  declarations: [AlbumCardComponent, AlbumListComponent],
  imports: [
    CommonModule
  ]
})
export class AlbumsModule { }
