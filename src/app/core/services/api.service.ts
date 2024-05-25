import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private apiGitHub = 'https://api.github.com';
  
  searchUsers(query: string): Observable<any> {
    return this.http.get(`${this.apiGitHub}/search/users/${query}`);
  }

  getUserRepositories(username: string): Observable<any> {
    return this.http.get(`${this.apiGitHub}/users/${username}/repos`);
  }
}
