import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  logOut() {
    if (confirm('¿Está seguro de que desea cerrar sesión?')) {
      this.router.navigate(['/log-out']);
    }
  }

}
