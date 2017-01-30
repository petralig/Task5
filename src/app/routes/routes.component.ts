import { Component, OnInit } from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(private digitransitService: DigitransitService) { }

  private pysakit: any = [];

  ngOnInit() {
    this.digitransitService.getRoutes()
      .subscribe(
        (res) => {
          console.log(res.data.stops[0].patterns);
          this.pysakit = res.data.stops[0].patterns;
        }
      );
  }

}
