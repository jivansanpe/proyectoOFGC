import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  option() {
    if (confirm('¿Quieres crear un nuevo evento?')) {
      this.router.navigate(['/principal/create']);
    }
  }

}
