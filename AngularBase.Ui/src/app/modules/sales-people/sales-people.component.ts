import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-people',
  templateUrl: './sales-people.component.html',
  styleUrls: ['./sales-people.component.css']
})

export class SalesPeopleComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit() {
        this.loading = false;
  }

}
