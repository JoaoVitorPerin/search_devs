import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    const dummyUsers = {
      items: [
        { login: 'user1' },
        { login: 'user2' }
      ]
    };

    service.searchUsers('test').subscribe(users => {
      expect(users.items.length).toBe(2);
      expect(users.items).toEqual(dummyUsers.items);
    });

    const req = httpMock.expectOne(`${service.apiGitHub}/search/users?q=test&per_page=7`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('should fetch user info', () => {
    const dummyUser = {
      login: 'user1',
      id: 1
    };

    service.getUserInfo('user1').subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`${service.apiGitHub}/users/user1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('should fetch user repositories', () => {
    const dummyRepos = [
      { name: 'repo1' },
      { name: 'repo2' }
    ];

    service.getUserRepositories('user1').subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(dummyRepos);
    });

    const req = httpMock.expectOne(`${service.apiGitHub}/users/user1/repos`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);
  });
});
