import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlightserService {

  constructor(private http: HttpClient) { }

  getalldata(): Observable<any> {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100");
  }
  year(year: any): Observable<any> {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year=" + year);
  }
  successfullaunch(a: any): Observable<any> {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + a);
  }
  successfullanding(t: any): Observable<any> {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&land_success=" + t);
  }
  allfilter(year: any, launch: any, landing: any): Observable<any> {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + launch + "&land_success=" + landing + "&launch_year=" + year);
  }

}
