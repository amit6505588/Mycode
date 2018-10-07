import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dataService: DataService) {

  }
  ngOnInit() {
    this.dataService.getFestivalDetails().subscribe((result) => {
      console.log(result);
    })
  }
}
