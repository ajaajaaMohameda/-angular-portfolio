import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface ItemSvg {
  svg: any;
  title: string;
  subTitle: string
}
@Component({
  selector: 'aja-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items: Array<ItemSvg> = [
    {
      svg: `  <svg xmlns="http://www.w3.org/2000/svg"
       class="icon icon-tabler icon-tabler-phone-call"
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      fill="none" 
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
      d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      <path d="M15 7a2 2 0 0 1 2 2" />
      <path d="M15 3a6 6 0 0 1 6 6" />
  </svg>`,
      title: '+212 649887978',
      subTitle: 'Mon-Fri 9am-6pm'
    },
    {
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg"
       class="icon icon-tabler icon-tabler-mail-opened"
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      fill="none" 
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="3 9 12 15 21 9 12 3 3 9" />
      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      <line x1="3" y1="19" x2="9" y2="13" />
      <line x1="15" y1="13" x2="21" y2="19" />
  </svg>`,
      title: 'info@gmail.com',
      subTitle: 'Online support'
    },
    {
      svg: ` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2"
      viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="18" y2="6.01" />
      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
      <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
      <line x1="9" y1="4" x2="9" y2="17" />
      <line x1="15" y1="15" x2="15" y2="20" />
  </svg>`,
      title: 'New York, USA',
      subTitle: 'NY 10012, US'
    },
  ];

  products = [{
    text: "lorem ipsim"
  },
  {
    text: "lorem ipsim"
  },
  {
    text: "lorem ipsim"
  },
  {
    text: "lorem ipsim"
  }];

  contacts = [{
    text: "lorem ipsim"
  },
  {
    text: "lorem ipsim"
  },
  {
    text: "lorem ipsim"
  },
  {
    text: "lorem ipsim"
  }];

  links = [
    {
      text: 'Your account'
    },
    {
      text: 'Become an affiliate'
    },
    {
      text: 'Become an affiliate'
    },
    {
      text: 'Help'
    }
  ];
  constructor(private sanitizer: DomSanitizer) { 
    this.items = this.items.map(item => {
      item.svg = this.sanitizer.bypassSecurityTrustHtml(item.svg);
      return item;
    })
  }

  ngOnInit(): void {
  }

}
