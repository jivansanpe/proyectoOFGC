import { Component, OnInit } from '@angular/core';

import { DirectorService } from '../director.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Director } from '../director';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  director: Director;
  form: FormGroup;

  constructor(
    public directorService: DirectorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.directorService.find(this.id).subscribe((data: Director)=>{
      this.director = data;
    });

    this.form = new FormGroup({
      apodo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      imagen: new FormControl('')
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.directorService.update(this.id, this.form.value).subscribe(res => {
         console.log('¡Director actualizado con éxito!');
         this.router.navigateByUrl('director/index');
    })
  }

}
