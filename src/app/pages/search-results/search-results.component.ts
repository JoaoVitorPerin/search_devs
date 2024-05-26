import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { UserInfoComponent } from 'src/app/shared/components/user-info/user-info.component';
import { UserReposComponent } from 'src/app/shared/components/user-repos/user-repos.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    HeaderComponent,
    UserInfoComponent,
    UserReposComponent
  ],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'] // Corrigi o nome da propriedade para 'styleUrls'
})
export class SearchResultsComponent implements OnInit {
  userName: string | null = 'Guest';
  userData: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const newUserName = params.get('username');
      if (newUserName && this.userName !== newUserName) {
        this.userName = newUserName;
        this.getUserData(this.userName);
      }
    });
  }

  getUserData(userName: string) {
    this.userService.getUserInfo(userName).subscribe(
      (data: any) => {
        this.userData.info = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.userService.getUserRepositories(userName).subscribe(
      (data: any) => {
        this.userData.repositories = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
