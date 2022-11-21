import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cubo } from 'src/app/models/cubo';
import { AuthService } from 'src/app/services/auth.service';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;
  public status!: boolean;

  constructor(
    private _serviceCubo: CuboService,
    private _router: Router,
    private _serviceAuth: AuthService
  ) {}

  ngOnInit(): void {
    this.loadMarcas();
    if (this._serviceAuth.getToken() != null) {
      //LOGEADO
      this.status = true;
    } else {
      this.status = false;
    }
  }

  loadMarcas(): void {
    this._serviceCubo.getAllMarcas().subscribe((res) => {
      this.marcas = res;
    });
  }

  goToMarcas(marca: string): void {
    this._router.navigate(['cubos/marca/', marca]);
  }

  logOut(): void {
    this._serviceAuth.deleteToken();
    this.ngOnInit();
    this._router.navigate(['/']);
  }
}
