import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  citoyens;

  constructor(public authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.getCitoyens().subscribe(
      data => {
        this.citoyens = data;
      },
      error => {
        this.authenticationService.logout();
        this.router.navigateByUrl('/login')
      }
    )


  }

  Onlogout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');

  }

  newCitoyen() {
    this.router.navigateByUrl('/nvcitoyen');
  }

  gestionusers() {
    this.router.navigateByUrl('/pub');

  }
}
