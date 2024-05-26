import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {
  constructor(
    private router: Router
  ){}

  goToHome(){
    this.router.navigate(['/']);
  }
}
