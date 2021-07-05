import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aja-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  imgs = [
    {
      src: 'assets/images/portfolio/portfolio-1.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-2.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-3.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-4.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-5.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-6.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-7.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-8.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    },
    {
      src: 'assets/images/portfolio/portfolio-9.jpg',
      name: 'Project name goes here',
      description: 'Category project'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
