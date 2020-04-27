import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host: String = "http://localhost:8084";
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private http: HttpClient) {
  }

  login(user) {
    return this.http.post(this.host + "/login", user, {observe: 'response'});
  }

  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwthelperservice = new JwtHelperService();
    this.roles = jwthelperservice.decodeToken(this.jwtToken).roles;


  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

//retourner la liste des citoyesns
  getCitoyens() {
    if (this.jwtToken == null)
      this.loadToken();
    return this.http.get(this.host + "/citoyens", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  ajouterNvCitoyen(citoyen) {
    return this.http.post(this.host + '/citoyens ', citoyen, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  isAdmin() {
    for (let r of this.roles) {
      if (r.authority == 'ADMIN')
        return true;
    }
    return false;
  }

}
