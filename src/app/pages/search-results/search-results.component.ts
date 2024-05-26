import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  userName: any = 'Guest';
  userData: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ){
  }
  
  ngOnInit(){
    this.userName = this.activatedRoute.snapshot.paramMap.get('username');

    if(this.userName){
      this.getUserData(this.userName);
    }
  }

  getUserData(userName: string){
    this.userService.getUserInfo(userName).subscribe((data: any) => {
      this.userData.info = data;
    },
    (error) => {
      console.error(error)
    });

    this.userService.getUserRepositories(userName).subscribe((data: any) => {
      this.userData.repositories = data;
    },
    (error) => {
      console.error(error)
    });

    console.log(this.userData);
  }
}
