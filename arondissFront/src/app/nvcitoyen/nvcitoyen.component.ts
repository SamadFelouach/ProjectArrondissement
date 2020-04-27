import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-nvcitoyen',
  templateUrl: './nvcitoyen.component.html',
  styleUrls: ['./nvcitoyen.component.css']
})
export class NvcitoyenComponent implements OnInit {
  citoyen: any;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  Onajoutecitoyen(citoyen) {
    this.authenticationService.ajouterNvCitoyen(citoyen).subscribe(
      resp => {
        this.citoyen = resp
      },
      error => {
        console.log(error);
      }
    )
  }

}
