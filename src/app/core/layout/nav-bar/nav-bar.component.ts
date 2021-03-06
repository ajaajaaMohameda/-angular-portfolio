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
    {title: 'Companies', fragment: 'companies'},
    {title: 'Testimonials', fragment: 'testimonials'},
    {title: 'Faq', fragment: 'faq'},
    {title: 'Get started', fragment: 'started'},
    {title: 'Portfolio', fragment: 'portfolio'}
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
