import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  // Navega al login tras dos segundos de espera.
  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['/vistoso']);
    }, 2000);
  }
}

