import { Component, OnInit, HostBinding,Input } from '@angular/core';
import { Macchine } from './macchine.module';
@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrls: ['./macchine.component.css']
})

export class MacchineComponent {
  @Input() macchine:Macchine;
  
  constructor(){

  }

  ngOnInit() {}
  onModificaValore(input:number){


  }
}

