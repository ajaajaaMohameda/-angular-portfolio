import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aja-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isMenuCollapsed = true;
  links = [
    {title: 'Home', fragment: 'intro'},
    {title: 'Services', fragment: 'services'},
    {title: 'Testimonials', fragment: 'companies'},
    {title: 'Faq', fragment: 'faq'},
    {title: 'Get started', fragment: 'started'},
    {title: 'Portfolio', fragment: 'portfolio'},
    {title: 'Contact', fragment: 'contact'}
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
