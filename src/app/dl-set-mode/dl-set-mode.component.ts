import { Component, OnInit } from '@angular/core';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_SetMode, E_OperatingMode,
} from 'abeeway-driver';


@Component({
  selector: 'app-dl-set-mode',
  templateUrl: './dl-set-mode.component.html',
  styleUrls: ['./dl-set-mode.component.css']
})
export class DlSetModeComponent implements OnInit {

  setModeAckToken = Math.floor(Math.random() * 16);

  E_OperatingMode: typeof E_OperatingMode = E_OperatingMode;
  operatingModeKeys: any[];
  selectedOperatingMode = '0';

  setModeEncoded = '';

  constructor() { }

  ngOnInit() {
    this.operatingModeKeys = Object.keys(E_OperatingMode).filter(k => typeof E_OperatingMode[k as any] === 'string' );
  }

  setModeEncode(): void {
    try {
      const pdu = new DPDU_SetMode ({
        header: new CPDU_DlHeaderShort({
            type:     E_DPDUType.SET_MODE,
            ackToken: this.setModeAckToken,
            optData:  0x0,
        }),
        mode:         parseInt(this.selectedOperatingMode, 10),
      });
      this.setModeEncoded = pdu.toHexString();
    } catch (err) {
      this.setModeEncoded = err.message;
    }
  }

}
