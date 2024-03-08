export interface ITelaio {
  id?: number;
  id_veicolo: number;
  telaio: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export class Telaio implements ITelaio {
  constructor(
    public id?: number,
    public id_veicolo: number,
    public telaio: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
