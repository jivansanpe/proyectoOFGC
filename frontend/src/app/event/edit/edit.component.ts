import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  event: Event;
  form: FormGroup;

  constructor(
    public eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.eventService.find(this.id).subscribe((data: Event)=>{
      this.event = data;
    });

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

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.eventService.update(this.id, this.form.value).subscribe(res => {
         console.log('¡Evento actualizado con éxito!');
         this.router.navigateByUrl('event/index');
    })
  }

}
