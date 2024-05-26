import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    TruncatePipe,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Input() userData: any = {};

  contactUser(url: string){
    window.open(url, '_blank');
  }
}
