import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secundaria',
  templateUrl: './secundaria.page.html',
  styleUrls: ['./secundaria.page.scss'],
})
export class SecundariaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  option2() {
    if (confirm('¿Quieres crear un nuevo director?')) {
      this.router.navigate(['/secundaria/create']);
    }
  }
}
