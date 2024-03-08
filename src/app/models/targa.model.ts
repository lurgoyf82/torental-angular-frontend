export interface ITarga {
  id: number;
  id_veicolo: number;
  targa: string;
  data_immatricolazione?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  attiva: '0' | '1';
}


export class Targa implements ITarga {
  constructor(
    public id: number,
    public id_veicolo: number,
    public targa: string,
    public data_immatricolazione?: Date,
    public createdAt?: Date,
    public updatedAt?: Date,
    public attiva: '0' | '1'
  ) {}
}
