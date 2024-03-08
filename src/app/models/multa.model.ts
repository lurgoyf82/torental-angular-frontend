export interface IMulta {
  id?: number;
  id_veicolo: number;
  data_multa: Date;
  importo: number;
  descrizione?: string;
  pagato: boolean;
  data_pagamento?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}


export class Multa implements IMulta {
  constructor(
    public id?: number,
    public id_veicolo: number,
    public data_multa: Date,
    public importo: number,
    public descrizione?: string,
    public pagato: boolean = false,
    public data_pagamento?: Date,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
