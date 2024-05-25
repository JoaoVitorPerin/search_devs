import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { users } from 'src/app/core/models/users.model';
import { ToastModule } from 'primeng/toast';
import { animacaoPadrao, inOutAnimation, inOutAnimationFast } from 'src/app/core/animation';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';
import { ProgressBarModule } from 'primeng/progressbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    ToastModule,
    TruncatePipe,
    ProgressBarModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  animations: [animacaoPadrao, inOutAnimation, inOutAnimationFast],
})
export class SearchBarComponent {
  searchForm: FormGroup;
  usersSearched: users[] = [];
  userNotFound: boolean = false;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ){
    this.searchForm = this.formBuilder.group({
      usernameSearch: ['', Validators.required]
    });
  }
  
  onSubmit(){
    this.searchForm.markAllAsTouched();
    if(this.searchForm.valid){
      this.usersSearched = [];
      this.userNotFound = false;
      this.isLoading = true;
      this.userService.searchUsers(this.searchForm.value.usernameSearch).subscribe((response) => {
        if(response.items.length === 0){
          this.isLoading = false;
          this.userNotFound = true;
          this.usersSearched = [];
          return;
        }
        this.userNotFound = false;
        this.usersSearched = response.items.map((user: any) => {
          return {
            avatar: user.avatar_url,
            name: user.login,
            qtdRepos: user.public_repos?.length,
            qtdFollowers: user.followers_url?.length
          };
        });
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      });
    }
  }

  goToResume(username: string){
    this.router.navigate([`search-results/${username}`]);
  }
}


