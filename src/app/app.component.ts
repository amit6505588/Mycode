import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public _opened: boolean = false;

  constructor(public dataService: DataService) {

  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit() {
    this.dataService.getFestivalDetails().subscribe((result) => {
      //console.log(result);
    })
  }
}
