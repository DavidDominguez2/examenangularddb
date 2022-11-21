import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;

  constructor(private _serviceCubo: CuboService, private _router: Router) {}

  ngOnInit(): void {
    this.loadMarcas();
  }

  loadMarcas(): void {
    this._serviceCubo.getAllMarcas().subscribe((res) => {
      this.marcas = res;
    });
  }

  goToMarcas(marca: string): void {
    this._router.navigate(['cubos/marca/', marca]);
  }
}
