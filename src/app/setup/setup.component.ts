import { Component, OnInit } from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  private pysakki: string = '';

  constructor(private digitransitService: DigitransitService, private router: Router) { }

  haeReitit = () => {
    // hae ja näytä reitit
    this.digitransitService.setNimi(this.pysakki);
    this.router.navigate(['routes']);
  };

  ngOnInit() {
  }

}
