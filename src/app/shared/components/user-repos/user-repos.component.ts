import { Component, Input } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-user-repos',
  standalone: true,
  imports: [
    TagModule,
    ButtonModule,
    PaginatorModule
  ],
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent {
  @Input() userData: any = {};

  sortOrder: 'desc' | 'asc' = 'desc';
  first: number = 0;
  rows: number = 5;

  formatDistanceToNow = formatDistanceToNow;

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }
  
  reorderRepos() {
    if (this.sortOrder === 'desc') {
      this.userData.repositories = this.userData.repositories.sort((a: any, b: any) => a.stargazers_count - b.stargazers_count);
      this.sortOrder = 'asc';
    } else {
      this.userData.repositories = this.userData.repositories.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
      this.sortOrder = 'desc';
    }
  }

  paginatedRepositories() {
    if (!this.userData.repositories) {
      return [];
    }
    const start = this.first;
    const end = this.first + this.rows;
    return this.userData.repositories.slice(start, end);
  }

  trackByRepository(index: number, repository: any): any {
    return repository.id;
  }
}
