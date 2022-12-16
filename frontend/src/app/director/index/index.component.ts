import { Component, OnInit } from '@angular/core';

import { DirectorService } from '../director.service';
import { Director } from '../director';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  directors: any = [];

  constructor(public directorService: DirectorService) { }

  ngOnInit(): void {
    this.directorService.getAll().subscribe((data: any[]) => {
      console.log(data);
      this.directors = data;
      this.directors = this.directors['data'];
    })
  }

  deleteDirector(id: number) {
    this.directorService.delete(id).subscribe(
      res => {
        this.directors = this.directors.filter((item: { id: number; }) => item.id !== id);
        console.log('¡Director eliminado con éxito!');
      },
      err => {
        console.error('Ocurrió un error al eliminar el director:', err);
      }
    );
  }

}
