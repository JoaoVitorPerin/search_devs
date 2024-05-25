import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  searchUsers(query: string): Observable<any> {
    return this.apiService.searchUsers(query);
  }

  getUserRepositories(username: string): Observable<any> {
    return this.apiService.getUserRepositories(username);
  }
}
