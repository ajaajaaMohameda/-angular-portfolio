import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aja-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  logos = [
    'assets/images/companies/company-1.png',
    'assets/images/companies/company-2.png',
    'assets/images/companies/company-3.png',
    'assets/images/companies/company-4.png',
    'assets/images/companies/company-5.png',
    'assets/images/companies/company-6.png',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
