import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  events: any = [];

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe((data: any[]) => {
      console.log(data);
      this.events = data;
      this.events = this.events['data'];
    })
  }

  deleteEvent(id: number) {
    this.eventService.delete(id).subscribe(
      res => {
        this.events = this.events.filter((item: { id: number; }) => item.id !== id);
        console.log('¡Evento eliminado con éxito!');
      },
      err => {
        console.error('Ocurrió un error al eliminar el evento:', err);
      }
    );
  }

}
