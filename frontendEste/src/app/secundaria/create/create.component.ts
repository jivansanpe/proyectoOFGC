import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(public directorService: DirectorService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
    });

  }

  get f() {
    return this.form.controls;
  }

  goBack() {
    this.elementRef.nativeElement.querySelector('.btn-primary').click();
  }

  submit() {
    console.log(this.form.value);
    this.directorService.create(this.form.value).subscribe(res => {
      console.log('¡Director creado con éxito!');
      // this.router.navigateByUrl('/secundaria/');
      this.goBack();
    })
  }

}
