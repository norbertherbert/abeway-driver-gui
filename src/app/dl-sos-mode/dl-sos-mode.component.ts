import { Component, OnInit } from '@angular/core';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_SOSMode,
} from 'abeeway-driver';


@Component({
  selector: 'app-dl-sos-mode',
  templateUrl: './dl-sos-mode.component.html',
  styleUrls: ['./dl-sos-mode.component.css']
})
export class DlSosModeComponent implements OnInit {

  sosModeAckToken = Math.floor(Math.random() * 16);
  startSosMode = 'true';
  sosModeEncoded = '';

  constructor() { }

  ngOnInit() { }

  sosModeEncode(): void {
    try {
      const pdu = new DPDU_SOSMode ({
        header: new CPDU_DlHeaderShort({
            type:     this.startSosMode === 'true' ? E_DPDUType.START_SOS_MODE : E_DPDUType.STOP_SOS_MODE,
            ackToken: this.sosModeAckToken,
            optData:  0x0,
        }),
      });
      this.sosModeEncoded = pdu.toHexString();
    } catch (err) {
      this.sosModeEncoded = err.message;
    }
  }

}
