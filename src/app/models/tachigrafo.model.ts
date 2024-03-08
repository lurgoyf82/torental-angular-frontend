export interface ITachigrafo {
  id: number;
  id_veicolo: number;
  anno?: number;
  data_pagamento?: Date;
  inizio_validita?: Date;
  fine_validita?: Date;
  importo?: number;
  createdAt?: Date;
  updatedAt?: Date;
}


export class Tachigrafo implements ITachigrafo {
  constructor(
    public id: number,
    public id_veicolo: number,
    public anno?: number,
    public data_pagamento?: Date,
    public inizio_validita?: Date,
    public fine_validita?: Date,
    public importo?: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
