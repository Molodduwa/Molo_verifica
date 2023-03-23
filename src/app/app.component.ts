import { Component,HostBinding } from '@angular/core';
import { Macchine } from './macchine/macchine.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  macchine:Macchine[]; 
  constructor(){
    this.macchine = [
      
      {
          "id": 1,
          "modello": "127",
          "marca": "Fiat",
          "prezzo": 1300,
          "velocitamax": 110
  
      },
  
      {
          "id": 2,
          "modello": "Giulietta",
          "marca": "Alfa Romeo",
          "prezzo": 4000,
          "velocitamax": 180
      },
      {
          "id": 3,
          "modello": "Fiesta",
          "marca": "Ford",
          "prezzo": 1600,
          "velocitamax": 130
  
      },
      {
          "id": 4,
          "modello": "Baracca",
          "marca": "Subaru",
          "prezzo": 5500,
          "velocitamax": 170
  
      }
  ];
  
    
  }
  
  OrdinaMacchineP1() {
    this.macchine.sort((a: Macchine, b: Macchine) => a.prezzo - b.prezzo);
  }
  OrdinaMacchineP2() {
    this.macchine.sort((a: Macchine, b: Macchine) => b.prezzo - a.prezzo);
  }
  OrdinaMacchineVM1() {
    this.macchine.sort((a: Macchine, b: Macchine) => b.velocitamax - a.velocitamax);
  }
  OrdinaMacchineVM2() {
    this.macchine.sort((a: Macchine, b: Macchine) => a.velocitamax - b.velocitamax);
  }



  ngOnInit() {
}
}


