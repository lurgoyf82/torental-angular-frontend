export interface IRevisione {
  id?: number;
  id_veicolo: number;
  anno?: number;
  data_pagamento?: Date;
  inizio_validita?: Date;
  fine_validita?: Date;
  importo?: number;
  agenzia?: string;
  polizza?: string;
  tipo_scadenza?: 'Quadrimestrale' | 'Semestrale' | 'Annuale';
  createdAt?: Date;
  updatedAt?: Date;
}


export class Revisione implements IRevisione {
  constructor(
    public id?: number,
    public id_veicolo: number,
    public anno?: number,
    public data_pagamento?: Date,
    public inizio_validita?: Date,
    public fine_validita?: Date,
    public importo?: number,
    public agenzia?: string,
    public polizza?: string,
    public tipo_scadenza?: 'Quadrimestrale' | 'Semestrale' | 'Annuale',
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
