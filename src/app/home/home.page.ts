import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "../services/auth.service";
import { WeatherService } from "../services/weather.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  weatherInfo: any;
  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService,
    private weather: WeatherService
  ) {}

  ngOnInit() {
    this.weather.searchData("Mexico", "mx").subscribe((response: any) => {
      console.log("From Home", response);
      this.weatherInfo = response;
    });
  }

  onLogout() {
    console.log("Logout");
    this.router.navigateByUrl("/login");
  }
}
