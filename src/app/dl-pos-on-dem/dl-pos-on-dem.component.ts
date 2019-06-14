import { Component, OnInit } from '@angular/core';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_PosOnDem,
} from 'abeeway-driver';


@Component({
  selector: 'app-dl-pos-on-dem',
  templateUrl: './dl-pos-on-dem.component.html',
  styleUrls: ['./dl-pos-on-dem.component.css']
})
export class DlPosOnDemComponent implements OnInit {

  posOnDemAckToken = Math.floor(Math.random() * 16);
  posOnDemEncoded = '';

  constructor() { }

  ngOnInit() { }

  posOnDemEncode(): void {
    try {
      const pdu = new DPDU_PosOnDem ({
        header: new CPDU_DlHeaderShort({
            type:     E_DPDUType.POSITION_ON_DEMAND,
            ackToken: this.posOnDemAckToken,
            optData:  0x0,
        }),
      });
      this.posOnDemEncoded = pdu.toHexString();
    } catch (err) {
      this.posOnDemEncoded = err.message;
    }
  }

}
