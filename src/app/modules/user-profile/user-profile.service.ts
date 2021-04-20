import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { AuthService } from '../auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserProfileService {
  apiUrl = environment.apiUrl;

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private http: HttpClient) {
  }

  updateProfile(body: any) {
    return this.http.post(this.apiUrl + '/users/profile', body, {
      headers: this.getHeaderConfig()
    }).pipe(
      tap(() => {
        this.authService.getUserByToken();
      })
    );
  }

  getHeaderConfig() {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const {authToken} = this.authService.getAuthFromLocalStorage();

    if (authToken) {
      headersConfig.Authorization = `Bearer ${authToken}`;
    }
    return headersConfig;
  }
}
