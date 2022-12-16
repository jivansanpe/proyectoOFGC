import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
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
    public eventService: EventService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      tipo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      lugar: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      fecha: new FormControl('', [Validators.required, Validators.pattern('^[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]+')]),
      horario: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      imagen: new FormControl(''),
      director_id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.eventService.create(this.form.value).subscribe(res => {
      console.log('¡Evento creado con éxito!');
      this.router.navigateByUrl('event/index');
    })
  }

}
