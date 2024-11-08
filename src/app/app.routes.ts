import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        component: AlbumsComponent,
        path: 'albums/:id'
    },
    {
        component: HomeComponent,
        path: ''
    },
];
