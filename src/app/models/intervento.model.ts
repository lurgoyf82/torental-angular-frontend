export interface IIntervento {
  id?: number;
  id_veicolo: number;
  createdAt?: Date;
  updatedAt?: Date;
}


export class Intervento implements IIntervento {
  constructor(
    public id?: number,
    public id_veicolo: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
