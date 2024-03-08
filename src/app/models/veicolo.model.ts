export interface IVeicolo {
  id?: number;
  id_proprietario?: number;
  id_tipo_veicolo?: number;
  id_tipo_allestimento?: number;
  id_marca?: number;
  id_modello?: number;
  id_tipo_asse?: number;
  id_tipo_cambio?: number;
  id_alimentazione?: number;
  id_destinazione_uso?: number;
  colore?: string;
  lunghezza_esterna?: number;
  larghezza_esterna?: number;
  massa?: number;
  portata?: number;
  cilindrata?: number;
  potenza?: number;
  numero_assi?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Veicolo implements IVeicolo {
  constructor(
    public id?: number,
    public id_proprietario?: number,
    public id_tipo_veicolo?: number,
    public id_tipo_allestimento?: number,
    public id_marca?: number,
    public id_modello?: number,
    public id_tipo_asse?: number,
    public id_tipo_cambio?: number,
    public id_alimentazione?: number,
    public id_destinazione_uso?: number,
    public colore?: string,
    public lunghezza_esterna?: number,
    public larghezza_esterna?: number,
    public massa?: number,
    public portata?: number,
    public cilindrata?: number,
    public potenza?: number,
    public numero_assi?: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}