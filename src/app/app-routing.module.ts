import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule",
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminPageModule",
    canActivate: [AuthGuard]
  },
  {
    path: 'todo-details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'todo-details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
