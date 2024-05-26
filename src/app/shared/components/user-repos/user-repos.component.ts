import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repos',
  standalone: true,
  imports: [],
  templateUrl: './user-repos.component.html',
  styleUrl: './user-repos.component.css'
})
export class UserReposComponent {
  @Input() userData: any = {};
}
