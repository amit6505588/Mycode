import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit {

  public festivalLists = [];
  public monthLists = [];
  public results: any = {};
  public allFestivalLists: any = [];
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFestivalDetails().subscribe((result) => {
      this.monthLists = Object.keys(result.result);
      this.results = result.result;
      this.monthLists.forEach((res) => {
        this.results[res].forEach((mon) => {
          this.allFestivalLists.push(mon);
        });
      });
      this.festivalLists = this.allFestivalLists;
    })
  }
  filterForMonths(value) {
    if (value == -1) {
      this.festivalLists = this.allFestivalLists
    } else {
      this.festivalLists = this.results[value];
    }
  }
}
