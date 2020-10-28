import { Component, OnInit } from '@angular/core';
import {BridgeServiceService} from '../bridge-service.service'

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  passdata(){
    this.BridgeServiceService
    
  }

  constructor( private BridgeServiceService: BridgeServiceService) { }

  ngOnInit() {
  }

}
