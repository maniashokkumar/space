import { Component, OnInit } from '@angular/core';
import { FlightserService } from '../flightser.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  rocket_Data: any;
  constructor(private httpser: FlightserService) {
    this.rocket_Data = [];
  }


  ngOnInit(): void {
    this.httpser.getalldata().subscribe(data => {

      this.rocket_Data = data;
    })
    console.log("data :", this.rocket_Data);
  }
  year(y: any) {
    this.httpser.year(y).subscribe(data => {

      this.rocket_Data = data;
    })
  }
  successfullanch(TF: any) {
    this.httpser.successfullaunch(TF).subscribe(data => {

      this.rocket_Data = data;
    })
  }
  successfullanding(tf: any) {
    this.httpser.successfullanding(tf).subscribe(data => {

      this.rocket_Data = data;
    })
  }
}
