import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private url = "https://api.openweathermap.org/data/2.5/weather";
  private apiKey = "1b18e1de1af1b8bf1d067b638760959f"; // <-- Enter your own key here!

  constructor(private http: HttpClient) {}

  searchData(city: string, countryCode: string): Observable<any> {
    return this.http
      .get(
        `${this.url}?q=${encodeURI(city)},${encodeURI(countryCode)}&appid=${
          this.apiKey
        }`
      )
      .pipe(
        map((results: any) => {
          results.weather[0].icon = `http://openweathermap.org/img/w/${
            results.weather[0].icon
          }.png`;
          return results;
        })
      );
  }
}
