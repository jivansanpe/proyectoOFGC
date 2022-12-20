import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistoso',
  templateUrl: './vistoso.page.html',
  styleUrls: ['./vistoso.page.scss'],
})
export class VistosoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
