import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('cajaemail') email!: ElementRef;
  @ViewChild('cajapassword') password!: ElementRef;
  constructor(private _serviceAuth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  login(): void {
    // var email = 'david.dominguez.blanco.2001@gmail.com';
    // var password = '12345';
    var email = this.email.nativeElement.value;
    var password = this.password.nativeElement.value;

    this._serviceAuth.login(email, password).subscribe((res) => {
      this._serviceAuth.setToken(res.response);
      this._router.navigate(['/']);
    });
  }
}
