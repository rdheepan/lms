import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LabsService {
  constructor(private http: HttpClient) {}

  loadLabs<T>() {
    return this.http.get<T>(
      'https://jsonplaceholder.typicode.com/photos?albumId=1'
    );
  }

  loadLab<T>(labId: number) {
    return this.http.get<T>(
      `https://jsonplaceholder.typicode.com/photos/${labId}`
    );
  }
}
