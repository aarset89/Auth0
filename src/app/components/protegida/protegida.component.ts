import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {
  userInfo: string = ""
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((res) => {
      console.log(JSON.stringify(res))
      this.userInfo = res;
    });

  }

}
