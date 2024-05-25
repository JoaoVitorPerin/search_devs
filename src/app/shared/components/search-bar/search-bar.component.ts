import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ){
    this.searchForm = formBuilder.group({
      usernameSearch: ['', Validators.required]
    });
  }
  
  onSubmit(){
    this.searchForm.markAllAsTouched();
    if(this.searchForm.valid){
      this.userService.searchUsers(this.searchForm.value.usernameSearch).subscribe((response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      });
    }
  }
}
