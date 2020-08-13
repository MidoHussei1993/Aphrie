import { Injectable } from '@angular/core';
import { END_POINTS } from 'src/app/core/Http/globals';
import { HttpClientService } from 'src/app/core/Http/services/http-client.service';
import { Observable } from 'rxjs';
import { ResultWithPage, User } from '../../models';

const API_URL = END_POINTS.users;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClientService) {}

  get(page: number): Observable<ResultWithPage<User[]>> {
    return this.http.get<ResultWithPage<User[]>>({
      url: API_URL,
      params: { page: page },
      cacheMins: 2,
    });
  }
}
