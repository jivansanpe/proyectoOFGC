import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public directorService: DirectorService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      apodo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      imagen: new FormControl('')
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.directorService.create(this.form.value).subscribe(res => {
      console.log('¡Director creado con éxito!');
      this.router.navigateByUrl('director/index');
    })
  }

}
