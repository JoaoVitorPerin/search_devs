import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchBarComponent } from './search-bar.component';
import { UserService } from 'src/app/core/services/user.service';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let userServiceMock: any;
  let routerMock: any;
  let activatedRouteMock: any;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['searchUsers']);
    routerMock = { navigate: jasmine.createSpy('navigate') };
    activatedRouteMock = { snapshot: { paramMap: { get: jasmine.createSpy('get').and.returnValue(null) } } };

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SearchBarComponent, // Importando o componente standalone diretamente
        ButtonModule,
        InputGroupAddonModule,
        InputGroupModule,
        ToastModule,
        ProgressBarModule,
        TruncatePipe
      ],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.searchForm).toBeDefined();
    expect(component.searchForm.get('usernameSearch')).toBeDefined();
  });

  it('should set the username from route params if available', () => {
    activatedRouteMock.snapshot.paramMap.get.and.returnValue('testuser');
    component.ngOnInit();
    expect(component.searchForm.get('usernameSearch')?.value).toBe('testuser');
  });

  it('should search for users on submit if the form is valid', () => {
    const mockResponse = { items: [{ login: 'user1', avatar_url: '', public_repos: [], id: 1 }] };
    userServiceMock.searchUsers.and.returnValue(of(mockResponse));
    component.searchForm.get('usernameSearch')?.setValue('testuser');
    component.onSubmit();
    expect(userServiceMock.searchUsers).toHaveBeenCalledWith('testuser');
    expect(component.isLoading).toBeFalse();
    expect(component.userNotFound).toBeFalse();
    expect(component.usersSearched.length).toBe(1);
  });

  it('should handle user not found', () => {
    const mockResponse = { items: [] };
    userServiceMock.searchUsers.and.returnValue(of(mockResponse));
    component.searchForm.get('usernameSearch')?.setValue('testuser');
    component.onSubmit();
    expect(userServiceMock.searchUsers).toHaveBeenCalledWith('testuser');
    expect(component.isLoading).toBeFalse();
    expect(component.userNotFound).toBeTrue();
    expect(component.usersSearched.length).toBe(0);
  });

  it('should handle search error', () => {
    userServiceMock.searchUsers.and.returnValue(throwError('error'));
    component.searchForm.get('usernameSearch')?.setValue('testuser');
    component.onSubmit();
    expect(userServiceMock.searchUsers).toHaveBeenCalledWith('testuser');
    expect(component.isLoading).toBeFalse();
  });

  it('should navigate to resume', () => {
    component.goToResume('testuser');
    expect(routerMock.navigate).toHaveBeenCalledWith(['perfil/testuser']);
  });

  it('should reset users searched', () => {
    component.usersSearched = [{ name: 'testuser', avatar: '', qtdRepos: 0, id: 1 }];
    component.userNotFound = true;
    component.resetUsersSearched();
    expect(component.usersSearched.length).toBe(0);
    expect(component.userNotFound).toBeFalse();
  });
});
