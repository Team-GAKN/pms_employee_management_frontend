import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private accessToken: string | undefined = '';

  setAccessToken(token: string | undefined) {
    this.accessToken = token;
  }

  getAccessToken(): string | undefined{
    return this.accessToken;
  }
}
