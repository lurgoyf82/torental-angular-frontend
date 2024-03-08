import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assicurazione } from '../models/assicurazione.model';

@Injectable({
  providedIn: 'root'
})
export class AssicurazioneService {
  private baseUrl = 'http://your-backend-api.com/api/assicurazioni'; // Your API endpoint

  constructor(private http: HttpClient) { }

  getAll(): Observable<Assicurazione[]> {
    return this.http.get<Assicurazione[]>(this.baseUrl);
  }

  // Add more methods as needed for CRUD operations
}
