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
    TruncatePipe
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  animations: [animacaoPadrao, inOutAnimation, inOutAnimationFast],
})
export class SearchBarComponent {
  searchForm: FormGroup;
  usersSearched: users[] = [];
  userNotFound = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ){
    this.searchForm = formBuilder.group({
      usernameSearch: ['', Validators.required]
    });
  }
  
  onSubmit(){
    this.searchForm.markAllAsTouched();
    if(this.searchForm.valid){
      this.userService.searchUsers(this.searchForm.value.usernameSearch).subscribe((response) => {
        if(response.items.length === 0){
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
      },
      (error) => {
        console.error(error);
      });
    }
  }
}
