import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchBarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private router: Router
  ){
  }
  
  goToHome(){
    this.router.navigate(['/']);
  }
}
