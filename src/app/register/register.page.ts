import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../entity/user.class";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  user: User = new User();

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}
  ngOnInit() {}

  async onRegister() {
    const user = await this.authService.onRegister(this.user);
    if (user.code) {
      return this.presentToast(user.message);
    }

    this.presentToast("Success, user created");
    this.router.navigateByUrl("/");
  }

  presentToast(message) {
    this.toastController
      .create({
        message: message,
        duration: 2000
      })
      .then(res => {
        console.log("hola desde la promesa");
        res.present();
      });
  }
}
