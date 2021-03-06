import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { RouterModule } from '@angular/router';
import { AlbumEditComponent } from './album-edit/album-edit.component';


@NgModule({
  declarations: [AlbumCardComponent, AlbumListComponent, AlbumDetailsComponent, AlbumEditComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    RouterModule
  ]
})
export class AlbumsModule { }
