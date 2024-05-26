import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiGitHub = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<any> {
    return this.http.get(`${this.apiGitHub}/search/users?q=${query}&per_page=7`);
  }

  getUserInfo(username: string): Observable<any> {
    return this.http.get(`${this.apiGitHub}/users/${username}`);
  }

  getUserRepositories(username: string): Observable<any> {
    return this.http.get(`${this.apiGitHub}/users/${username}/repos`);
  }
}
