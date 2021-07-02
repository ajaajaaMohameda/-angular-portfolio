import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'aja-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  lightbox: any;
  constructor() { 

  }

  ngOnInit(): void {
     this.lightbox = GLightbox(
      {
          'href': 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
          'type': 'video',
          'source': 'youtube', //vimeo, youtube or local
          'width': 900,
      }
  );
  }

}
