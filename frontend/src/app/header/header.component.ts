import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin = false;
  roleAs: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.updateAuthInfo();
  }

  updateAuthInfo(){
    this.isLogin = this.authService.isLoggedIn();
    this.roleAs = this.authService.getRole();
  }

  loginAsUser(){
    this.authService.login("ROLE_USER").subscribe(response => {
      this.updateAuthInfo();
      this.router.navigateByUrl("/user");
    });
  }

  loginAsAdmin(){
    this.authService.login("ROLE_ADMIN").subscribe(response => {
      this.updateAuthInfo();
      this.router.navigateByUrl("/admin");
    });
  }

  logout(){
    this.authService.logout();
    this.updateAuthInfo();
    this.router.navigateByUrl("/home");
  }

}
