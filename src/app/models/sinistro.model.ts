export interface ISinistro {
  id?: number;
  id_veicolo: number;
}


export class Sinistro implements ISinistro {
  constructor(
    public id?: number,
    public id_veicolo: number
  ) {}
}
