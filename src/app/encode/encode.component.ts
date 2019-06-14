import { Component, OnInit } from '@angular/core';
import { E_DPDUType } from 'abeeway-driver';


@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {

  E_DPDUType: typeof E_DPDUType = E_DPDUType;
  selectedDPDUType = E_DPDUType.POSITION_ON_DEMAND;

  constructor() { }

  ngOnInit() { }

}
