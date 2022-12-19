import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.page.html',
  styleUrls: ['./log-out.page.scss'],
})
export class LogOutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Redirige a la página de inicio después de 2 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

}
