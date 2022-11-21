import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css'],
})
export class DetallescuboComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;
  constructor(
    private _serviceCubo: CuboService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      var id = parseInt(params['id']);
      this.laodCubo(id);
      this.loadComentariosCubo(id);
    });
  }

  laodCubo(id: number): void {
    this._serviceCubo.getCuboById(id).subscribe((res) => {
      this.cubo = res;
    });
  }

  loadComentariosCubo(id: number): void {
    this._serviceCubo.getComentariosByIdCubo(id).subscribe((res) => {
      this.comentarios = res;
    });
  }

  loadUsuarioComentario(id: number): void {}
}
