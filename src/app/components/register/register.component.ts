import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public usuario!: Usuario;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajaemail') cajaemail!: ElementRef;
  @ViewChild('cajapassword') cajapassword!: ElementRef;
  constructor(private _serviceAuth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  register(): void {
    this.usuario = new Usuario(
      0,
      this.cajanombre.nativeElement.value,
      this.cajaemail.nativeElement.value,
      this.cajapassword.nativeElement.value
    );

    this._serviceAuth.register(this.usuario).subscribe(() => {
      this._serviceAuth
        .login(this.usuario.email, this.usuario.pass)
        .subscribe((res) => {
          this._serviceAuth.setToken(res.response);
          this._router.navigate(['/']);
        });
    });
  }
}
