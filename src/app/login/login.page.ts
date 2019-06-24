import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../entity/user.class";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async onLogin() {
    const user = await this.authService.onLogin(this.user);
    if (user.code) {
      return this.presentToast(user.message);
    }

    this.presentToast("Success Login");
    this.router.navigateByUrl("/");
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
