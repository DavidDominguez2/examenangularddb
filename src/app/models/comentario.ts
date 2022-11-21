export class Comentario {
  constructor(
    public idComentario: number,
    public idCubo: number,
    public idUsuario: number,
    public comentario: string,
    public fechaComentario: string
  ) {}
}
