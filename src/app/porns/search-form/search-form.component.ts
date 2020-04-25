import { Component, OnInit } from '@angular/core';
import { PornsService, Sorting, GayFilter } from 'src/app/porns.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {

  constructor(public pornsService: PornsService) { }

  get sortingItems() {
    return Object.keys(Sorting).reduce((items, key) => [...items, { text: key, value: Sorting[key]}], []);
  }

  get gayFilterItems() {
    const StringIsNumber = value => isNaN(Number(value)) === true;
    return Object.keys(GayFilter)
      .filter(StringIsNumber)
      .reduce((items, key) => [...items, { text: key, value: GayFilter[key]}], []);
  }
  ngOnInit() {
  }

}
