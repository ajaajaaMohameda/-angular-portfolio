import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aja-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @ViewChild('carousel') carousel: NgbCarousel;
  testimonials = [{
    name: "Patrick Muriungi",
    role: "CEO & founder",
    ratings: new Array(3),
    img: "assets/images/testimonials/client-1.jpg"
  }, {
    name: "Patrick Muriungi",
    role: "CEO & founder",
    ratings: new Array(4),
    img: "assets/images/testimonials/client-2.jpg"
  }, {
    name: "Patrick Muriungi",
    role: "CEO & founder",
    ratings: new Array(1),
    img: "assets/images/testimonials/client-3.jpg"
  }, {
    name: "Patrick Muriungi",
    role: "CEO & founder",
    ratings: new Array(4),
    img: "assets/images/testimonials/client-4.jpg"
  }, {
    name: "Patrick Muriungi",
    role: "CEO & founder",
    ratings: new Array(4),
    img: "assets/images/testimonials/client-5.jpg"
  }];
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.carousel.next();
  }

  prev() {
    this.carousel.prev();
  }
}
