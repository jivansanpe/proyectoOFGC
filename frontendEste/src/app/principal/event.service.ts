import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiURL = "http://localhost:8000/api/events/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.apiURL, JSON.stringify(event), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<Event> {
    return this.httpClient.get<Event>(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, event: Event): Observable<Event> {
    return this.httpClient.put<Event>(this.apiURL + id, JSON.stringify(event), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete<Event>(this.apiURL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
