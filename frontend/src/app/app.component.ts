import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bicycles';

  constructor(private permissionsService: NgxPermissionsService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    let perm = this.authService.getRole();

    this.permissionsService.loadPermissions([perm]);
  }
}
