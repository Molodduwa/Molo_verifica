export class Macchine{
    id: number;
    modello: string;
    marca: string;
    prezzo:number;
    velocitamax:number;

  constructor(id:number, model:string, marc:string, prezz:number, velocitamax:number){
    this.id= id;
    this.modello= model;
    this.marca= marc;
    this.prezzo=prezz;
    this.velocitamax=velocitamax;


  }

}