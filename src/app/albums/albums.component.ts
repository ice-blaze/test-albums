import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';


interface Meta {
  title: string;
  date: string;
  count: number;
}
// TODO find dinamically the number of images

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  private readonly http = inject(HttpClient)

  public meta?: Meta;
  public cover = '';
  public count = 0;
  public images: string[] = [];

  @Input()
  set id(albumId: string) {
    const baseUrl = `albums/${albumId}/`
    this.http.get<Meta>(`${baseUrl}meta.json`).subscribe(meta => {
      this.meta = meta
      this.cover = baseUrl + "cover.jpg"
      this.images = Array.from({ length: meta.count }, (_, i) => {
        const number = (i + 1).toString().padStart(3, '0')
        return `${baseUrl}${number}.jpg`
      })

      console.log('RES', meta);
    })
  }
}
