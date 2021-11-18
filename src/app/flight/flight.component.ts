import { Component, OnInit } from '@angular/core';
import { FlightserService } from '../flightser.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  rocket_Data: any;
  a: any = [];

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
    });
    this.a[0] = y;
    console.log(this.a);

  }
  successfullanch(TF: any) {
    this.httpser.successfullaunch(TF).subscribe(data => {

      this.rocket_Data = data;
    })
    this.a[1] = TF;
    console.log(this.a);

  }
  successfullanding(tf: any) {
    this.httpser.successfullanding(tf).subscribe(data => {

      this.rocket_Data = data;
    });
    this.a[2] = tf;
    console.log(this.a);
  }
  func2() {
    this.httpser.allfilter(this.a[0], this.a[1], this.a[2]).subscribe(data => {

      this.rocket_Data = data;
    });
    console.log(this.a[0]);

  }
  clear() {
  
    this.a = [];
    this.ngOnInit()

  }

}
