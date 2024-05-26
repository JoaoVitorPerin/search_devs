import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['searchUsers', 'getUserInfo', 'getUserRepositories']);

    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: ApiService, useValue: spy }
      ]
    });

    service = TestBed.inject(UserService);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call searchUsers on ApiService', () => {
    const dummyUsers = { items: [{ login: 'user1' }, { login: 'user2' }] };
    apiServiceSpy.searchUsers.and.returnValue(of(dummyUsers));

    service.searchUsers('test').subscribe(users => {
      expect(users.items.length).toBe(2);
      expect(users.items).toEqual(dummyUsers.items);
    });

    expect(apiServiceSpy.searchUsers).toHaveBeenCalledWith('test');
  });

  it('should call getUserInfo on ApiService', () => {
    const dummyUser = { login: 'user1', id: 1 };
    apiServiceSpy.getUserInfo.and.returnValue(of(dummyUser));

    service.getUserInfo('user1').subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    expect(apiServiceSpy.getUserInfo).toHaveBeenCalledWith('user1');
  });

  it('should call getUserRepositories on ApiService', () => {
    const dummyRepos = [{ name: 'repo1' }, { name: 'repo2' }];
    apiServiceSpy.getUserRepositories.and.returnValue(of(dummyRepos));

    service.getUserRepositories('user1').subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(dummyRepos);
    });

    expect(apiServiceSpy.getUserRepositories).toHaveBeenCalledWith('user1');
  });
});
