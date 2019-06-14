import { Component, OnInit } from '@angular/core';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_DebugCmd,
} from 'abeeway-driver';


@Component({
  selector: 'app-dl-debug-cmd',
  templateUrl: './dl-debug-cmd.component.html',
  styleUrls: ['./dl-debug-cmd.component.css']
})
export class DlDebugCmdComponent implements OnInit {

  debugCmdAckToken = Math.floor(Math.random() * 16);
  debugCmdEncoded = '';

  constructor() { }

  ngOnInit() { }

  debugCmdEncode(): void {
    try {
      const pdu = new DPDU_DebugCmd ({
        header: new CPDU_DlHeaderShort({
            type:     E_DPDUType.DEBUG_COMMAND,
            ackToken: this.debugCmdAckToken,
            optData:  0x0,
        }),
      });
      this.debugCmdEncoded = pdu.toHexString();
    } catch (err) {
      this.debugCmdEncoded = err.message;
    }
  }

}
