import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;
  constructor(
    private _serviceCubo: CuboService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['marca'] !== undefined) {
        this.loadCubosMarca(params['marca']);
      } else {
        this.loadCubos();
      }
    });
  }

  loadCubos(): void {
    this._serviceCubo.getAllCubos().subscribe((res) => {
      this.cubos = res;
    });
  }

  loadCubosMarca(marca: string): void {
    this.marca = marca;
    this._serviceCubo.getCubosMarca(marca).subscribe((res) => {
      this.cubos = res;
    });
  }
}
