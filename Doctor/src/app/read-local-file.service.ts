import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadLocalFileService {

  constructor(private http: HttpClient) { }
  getTextFileLines(filename: string) {
    return this.http.get(filename, {responseType: 'text'});
  }
}
