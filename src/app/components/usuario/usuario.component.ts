import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { Cubo } from 'src/app/models/cubo';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { CuboService } from 'src/app/services/cubo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public usuario!: Usuario;
  public compras!: Array<Compra>;
  public cubosusuario: Array<Cubo> = [];

  constructor(
    private _serviceUsuario: UsuarioService,
    private _serviceCubo: CuboService
  ) {}

  ngOnInit(): void {
    this.loadUsuario();
    this.loadCompras();
  }

  loadUsuario(): void {
    this._serviceUsuario.getPerfilUsuario().subscribe((res) => {
      this.usuario = res;
    });
  }

  loadCompras(): void {
    this._serviceUsuario.getComprasUsuario().subscribe((res) => {
      this.compras = res;
      this.compras.forEach((c: Compra) => {
        this._serviceCubo.getCuboById(c.idCubo).subscribe((res) => {
          this.cubosusuario.push(res);
        });
      });
    });
  }
}
